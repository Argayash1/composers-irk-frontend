import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UnionMember, UniomMemberSliceState, Status } from './types';
import { fetchUnionMembers } from './asyncActions';

const initialState: UniomMemberSliceState = {
  items: [],
  status: Status.LOADING,
  currentPage: 1,
  limit: 6,
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
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchUnionMembers.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems, setCurrentPage } = unionMemberSlice.actions;

export default unionMemberSlice.reducer;
