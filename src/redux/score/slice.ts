import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Status, ScoreSliceState, Score } from './types';
import { fetchScores } from './asyncActions';

const initialState: ScoreSliceState = {
  items: [],
  status: Status.LOADING,
  categoryId: 0,
};

const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Score[]>) {
      state.items = action.payload;
    },

    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchScores.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchScores.fulfilled, (state, action) => {
      state.items = action.payload.data;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchScores.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems, setCategoryId } = scoreSlice.actions;

export default scoreSlice.reducer;
