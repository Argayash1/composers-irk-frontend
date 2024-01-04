import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { News, NewsSliceState, Status } from './types';
import { fetchNews } from './asyncActions';

const initialState: NewsSliceState = {
  items: [],
  status: Status.LOADING,
  currentPage: 1,
  limit: 6,
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
        const newItems = data.filter((item) => !state.items.some((existingItem) => existingItem.id === item.id));

        state.items = [...state.items, ...newItems];
        state.status = Status.SUCCESS;
      } else {
        state.items = data;
        state.status = Status.SUCCESS;
      }
    });

    builder.addCase(fetchNews.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems, setCurrentPage, setLimit } = newsSlice.actions;

export default newsSlice.reducer;
