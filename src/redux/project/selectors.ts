import { RootState } from '../store';

export const selectProjectData = (state: RootState) => state.project;

export const selectProjectCurrentPage = (state: RootState) => state.project.currentPage;
