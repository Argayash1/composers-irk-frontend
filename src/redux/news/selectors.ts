import { RootState } from '../store';

export const selectNewsData = (state: RootState) => state.news;
