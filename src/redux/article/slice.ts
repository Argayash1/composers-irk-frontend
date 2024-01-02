import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleSliceState, Status } from './types';
import { fetchArticles } from './asyncActions';

const initialState: ArticleSliceState = {
  items: [],
  status: Status.LOADING,
  currentPage: 1,
  limit: 6,
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
      state.items = [];
    });

    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems, setCurrentPage } = articleSlice.actions;

export default articleSlice.reducer;
