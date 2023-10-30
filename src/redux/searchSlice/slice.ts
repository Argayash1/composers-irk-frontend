import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isSearchOpen: false,
  searchValue: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setIsSearchOpen: (state) => {
      state.isSearchOpen = !state.isSearchOpen;
    },

    setCloseSearch: (state) => {
      state.isSearchOpen = false;
      state.searchValue = '';
    },

    setOpenSearch: (state) => {
      state.isSearchOpen = true;
    },

    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setIsSearchOpen, setOpenSearch, setCloseSearch, setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
