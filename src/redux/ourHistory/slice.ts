import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOurHistory, OurHistorySliceState, Status } from './types';
import { fetchourHistory } from './asyncActions';

const initialState: OurHistorySliceState = {
  historyItem: { text: '', _id: '' },
  historyStatus: Status.LOADING,
};

const ourHistorySlice = createSlice({
  name: 'ourHistory',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<IOurHistory>) {
      state.historyItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchourHistory.pending, (state) => {
      state.historyStatus = Status.LOADING;
      state.historyItem = { text: '', _id: '' };
    });

    builder.addCase(fetchourHistory.fulfilled, (state, action) => {
      state.historyItem = action.payload[0];
      state.historyStatus = Status.SUCCESS;
    });

    builder.addCase(fetchourHistory.rejected, (state) => {
      state.historyStatus = Status.ERROR;
      state.historyItem = { text: '', _id: '' };
    });
  },
});

export const { setItems } = ourHistorySlice.actions;

export default ourHistorySlice.reducer;
