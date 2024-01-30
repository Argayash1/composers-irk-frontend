import { createAsyncThunk } from '@reduxjs/toolkit';
import { IReport } from './types';
import axios from 'axios';
import { localApi } from '../../utils/constants';

export const fetchReport = createAsyncThunk<IReport[]>('report/fetchReportStatus', async () => {
  const { data } = await axios.get<IReport[]>(`${localApi}/reports`);
  return data;
});
