import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IReport, ReportSliceState, Status } from './types';
import { fetchReport } from './asyncActions';

const initialState: ReportSliceState = {
  item: { year: '', imageUrl: '' },
  status: Status.LOADING,
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    setItem(state, action: PayloadAction<IReport>) {
      state.item = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReport.pending, (state) => {
      state.status = Status.LOADING;
      state.item = { year: '', imageUrl: '' };
    });

    builder.addCase(fetchReport.fulfilled, (state, action) => {
      state.item = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchReport.rejected, (state) => {
      state.status = Status.ERROR;
      state.item = { year: '', imageUrl: '' };
    });
  },
});

export const { setItem } = reportSlice.actions;

export default reportSlice.reducer;
