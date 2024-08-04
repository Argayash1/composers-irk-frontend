import { createAsyncThunk } from '@reduxjs/toolkit';
import { ReportsItems } from './types';
import axios from 'axios';
import { mainApi } from '../../utils/constants';

export const fetchReport = createAsyncThunk<ReportsItems>('report/fetchReportStatus', async () => {
  const { data } = await axios.get<ReportsItems>(`${mainApi}/reports`);
  return data;
});
