import { RootState } from '../store';

export const selectArticleData = (state: RootState) => state.article;

export const selectArticleCurrentPage = (state: RootState) => state.article.currentPage;
