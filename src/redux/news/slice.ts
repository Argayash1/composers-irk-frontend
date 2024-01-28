import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { News, NewsSliceState, Status } from './types';
import { fetchNews, fetchNewsById } from './asyncActions';

const initialState: NewsSliceState = {
  items: [],
  status: Status.LOADING,
  currentPage: 1,
  limit: 6,
  totalPages: 0,
  item: { _id: '', title: '', imageUrl: '', newsText: '', createdAt: '' },
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<News[]>) {
      state.items = action.payload;
    },

    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },

    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.status = Status.LOADING;
    });

    builder.addCase(fetchNews.fulfilled, (state, action) => {
      const { data, screenWidth, currentPage } = action.payload;

      if (screenWidth <= 638 && currentPage > 1) {
        const newItems = data.news.filter((item) => !state.items.some((existingItem) => existingItem._id === item._id));

        state.items = [...state.items, ...newItems];
        state.totalPages = data.totalPages;
        state.status = Status.SUCCESS;
      } else {
        state.items = data.news;
        state.totalPages = data.totalPages;
        state.status = Status.SUCCESS;
      }
    });

    builder.addCase(fetchNews.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });

    builder.addCase(fetchNewsById.pending, (state) => {
      state.status = Status.LOADING;
      state.item = { _id: '', title: '', imageUrl: '', newsText: '', createdAt: '' };
    });

    builder.addCase(fetchNewsById.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.item = action.payload;
    });

    builder.addCase(fetchNewsById.rejected, (state) => {
      state.status = Status.LOADING;
      state.item = { _id: '', title: '', imageUrl: '', newsText: '', createdAt: '' };
    });
  },
});

export const { setItems, setCurrentPage, setLimit } = newsSlice.actions;

export default newsSlice.reducer;
