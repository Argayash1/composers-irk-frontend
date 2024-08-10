import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IReport, ReportSliceState, Status } from './types';
import { fetchReport } from './asyncActions';

const initialState: ReportSliceState = {
  items: [],
  status: Status.LOADING,
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    setItem(state, action: PayloadAction<IReport[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReport.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchReport.fulfilled, (state, action) => {
      state.items = action.payload.data;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchReport.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItem } = reportSlice.actions;

export default reportSlice.reducer;
