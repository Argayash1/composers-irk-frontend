import { RootState } from '../store';

export const selectSearchData = (state: RootState) => state.search;

export const selectIsSearchOpen = (state: RootState) => state.search.isSearchOpen;

export const selectSearchValue = (state: RootState) => state.search.searchValue;

export const selectCurrentPage = (state: RootState) => state.search.currentPage;
