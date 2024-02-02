import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchSliceState, Status } from './types';
import { fetchSearchResults } from './asyncActions';

const initialState: SearchSliceState = {
  currentPage: 1,
  totalPages: 0,
  screenWidth: window.innerWidth,
  isSearchOpen: false,
  searchValue: '',
  searchResults: [],
  errorText: '',
  status: Status.LOADING,
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

    setErrorText(state, action: PayloadAction<string>) {
      state.errorText = action.payload;
    },

    setScreenWidth(state, action: PayloadAction<number>) {
      state.screenWidth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchResults.pending, (state) => {
      state.status = Status.LOADING;
    });

    builder.addCase(fetchSearchResults.fulfilled, (state, action) => {
      const { data, screenWidth, currentPage } = action.payload;

      if (screenWidth <= 638 && currentPage > 1) {
        const newItems = data.results.filter(
          (item) => !state.searchResults.some((existingItem) => existingItem._id === item._id),
        );

        state.searchResults = [...state.searchResults, ...newItems];
        state.totalPages = data.totalPages;
        state.status = Status.SUCCESS;
      } else {
        state.searchResults = data.results;
        state.totalPages = data.totalPages;
        state.status = Status.SUCCESS;
      }
    });

    builder.addCase(fetchSearchResults.rejected, (state) => {
      state.status = Status.ERROR;
      state.searchResults = [];
    });
  },
});

export const { setCurrentPage, setOpenSearch, setCloseSearch, setSearchValue, setScreenWidth, setErrorText } =
  searchSlice.actions;

export default searchSlice.reducer;
