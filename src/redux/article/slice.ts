import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleSliceState, Status } from './types';
import { fetchArticleById, fetchArticles } from './asyncActions';

const initialState: ArticleSliceState = {
  items: [],
  status: Status.LOADING,
  currentPage: 1,
  limit: 6,
  totalPages: 0,
  item: { _id: '', imageUrl: '', createdAt: '', title: '', articleDescription: '', articleText: '' },
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Article[]>) {
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
    builder.addCase(fetchArticles.pending, (state) => {
      state.status = Status.LOADING;
    });

    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      const { data, screenWidth, currentPage } = action.payload;

      if (screenWidth <= 1126 && currentPage > 1) {
        const newItems = data.data.filter((item) => !state.items.some((existingItem) => existingItem._id === item._id));

        state.items = [...state.items, ...newItems];
        state.totalPages = data.totalPages;
        state.status = Status.SUCCESS;
      } else {
        state.items = data.data;
        state.totalPages = data.totalPages;
        state.status = Status.SUCCESS;
      }
    });

    builder.addCase(fetchArticles.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });

    builder.addCase(fetchArticleById.pending, (state) => {
      state.status = Status.LOADING;
      state.item = { _id: '', imageUrl: '', createdAt: '', title: '', articleDescription: '', articleText: '' };
    });

    builder.addCase(fetchArticleById.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.item = action.payload;
    });

    builder.addCase(fetchArticleById.rejected, (state) => {
      state.status = Status.LOADING;
      state.item = { _id: '', imageUrl: '', createdAt: '', title: '', articleDescription: '', articleText: '' };
    });
  },
});

export const { setItems, setCurrentPage } = articleSlice.actions;

export default articleSlice.reducer;
