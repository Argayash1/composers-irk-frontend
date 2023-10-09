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

    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setIsSearchOpen, setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
