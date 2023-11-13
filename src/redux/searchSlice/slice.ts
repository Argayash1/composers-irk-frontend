import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Item = {
  imageUrl?: string;
  title?: string;
  name?: string;
  surname?: string;
  profession?: string;
  biography?: string[];
  description?: string;
  newsText?: string;
};

interface SearchSliceState {
  currentPage: number;
  isSearchOpen: boolean;
  searchValue: string;
  searchResults: Item[];
}

const initialState: SearchSliceState = {
  currentPage: 1,
  isSearchOpen: false,
  searchValue: '',
  searchResults: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    setToggleSearch: (state) => {
      state.isSearchOpen = !state.isSearchOpen;
    },

    setOpenSearch: (state) => {
      state.isSearchOpen = true;
    },

    setCloseSearch: (state) => {
      state.isSearchOpen = false;
      state.searchValue = '';
    },

    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },

    setSearchResults(state, action: PayloadAction<Item[]>) {
      state.searchResults = action.payload;
    },
  },
});

export const { setCurrentPage, setToggleSearch, setOpenSearch, setCloseSearch, setSearchValue, setSearchResults } =
  searchSlice.actions;

export default searchSlice.reducer;
