import { RootState } from '../store';

export const selectProjectsData = (state: RootState) => state.project;

export const selectProjectCurrentPage = (state: RootState) => state.project.currentPage;
