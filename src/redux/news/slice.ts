import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { News, NewsSliceState, Status } from './types';
import { fetchNews } from './asyncActions';

const initialState: NewsSliceState = {
  items: [],
  status: Status.LOADING,
};

const newsSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<News[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchNews.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = newsSlice.actions;

export default newsSlice.reducer;
