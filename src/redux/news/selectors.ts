import { RootState } from '../store';

export const selectNewsData = (state: RootState) => state.news;

export const selectNewsCurrentPage = (state: RootState) => state.news.currentPage;
