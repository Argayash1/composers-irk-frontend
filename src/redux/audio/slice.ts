import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAudio, AudioSliceState, Status } from './types';
import { fetchAudios } from './asyncActions';

const initialState: AudioSliceState = {
  items: [],
  status: Status.LOADING,
};

const articleSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<IAudio[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAudios.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchAudios.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchAudios.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = articleSlice.actions;

export default articleSlice.reducer;
