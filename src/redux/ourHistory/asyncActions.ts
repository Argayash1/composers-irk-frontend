import { createAsyncThunk } from '@reduxjs/toolkit';
import { ourHistoryItems } from './types';
import axios from 'axios';
import { mainApi } from '../../utils/constants';

export const fetchourHistory = createAsyncThunk<ourHistoryItems>('ourHistory/fetchOurHistoryStatus', async () => {
  const { data } = await axios.get<ourHistoryItems>(`${mainApi}/ourHistory`);
  return data;
});
