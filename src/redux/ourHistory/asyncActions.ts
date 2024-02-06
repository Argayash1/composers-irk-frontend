import { createAsyncThunk } from '@reduxjs/toolkit';
import { ourHistoryItems } from './types';
import axios from 'axios';
import { localApi } from '../../utils/constants';

export const fetchourHistory = createAsyncThunk<ourHistoryItems>('ourHistory/fetchOurHistoryStatus', async () => {
  const { data } = await axios.get<ourHistoryItems>(`${localApi}/ourHistory`);
  return data;
});
