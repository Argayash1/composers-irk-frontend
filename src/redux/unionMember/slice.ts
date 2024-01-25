import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UnionMember, UniomMemberSliceState, Status } from './types';
import { fetchUnionMembers } from './asyncActions';

const initialState: UniomMemberSliceState = {
  items: [],
  status: Status.LOADING,
  currentPage: 1,
  limit: 6,
  totalPages: 0,
};

const unionMemberSlice = createSlice({
  name: 'unionMember',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<UnionMember[]>) {
      state.items = action.payload;
    },

    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUnionMembers.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchUnionMembers.fulfilled, (state, action) => {
      const { data, screenWidth, currentPage } = action.payload;

      if (screenWidth <= 638 && currentPage > 1) {
        const newItems = data.members.filter(
          (item) => !state.items.some((existingItem) => existingItem._id === item._id),
        );

        state.items = [...state.items, ...newItems];
        state.totalPages = data.totalPages;
        state.status = Status.SUCCESS;
      } else {
        state.items = data.members;
        state.totalPages = data.totalPages;
        state.status = Status.SUCCESS;
      }
    });

    builder.addCase(fetchUnionMembers.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems, setCurrentPage } = unionMemberSlice.actions;

export default unionMemberSlice.reducer;
