import { RootState } from '../store';

export const selectVideoData = (state: RootState) => state.video;

export const selectVideoCurrentPage = (state: RootState) => state.video.currentPage;
