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
  errorText: string;
}

const initialState: SearchSliceState = {
  currentPage: 1,
  isSearchOpen: false,
  searchValue: '',
  searchResults: [],
  errorText: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },

    setOpenSearch: (state) => {
      state.isSearchOpen = true;
    },

    setCloseSearch: (state) => {
      state.isSearchOpen = false;
      state.searchValue = '';
      state.errorText = '';
      state.searchResults = [];
    },

    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },

    setSearchResults(state, action: PayloadAction<Item[]>) {
      state.searchResults = action.payload;
    },

    setErrorText(state, action: PayloadAction<string>) {
      state.errorText = action.payload;
    },
  },
});

export const { setCurrentPage, setOpenSearch, setCloseSearch, setSearchValue, setSearchResults, setErrorText } =
  searchSlice.actions;

export default searchSlice.reducer;
