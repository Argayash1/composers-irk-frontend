import { createAsyncThunk } from '@reduxjs/toolkit';
import { IOurHistory } from './types';
import axios from 'axios';
import { localApi } from '../../utils/constants';

export const fetchourHistory = createAsyncThunk<IOurHistory[]>('ourHistory/fetchOurHistoryStatus', async () => {
  const { data } = await axios.get<IOurHistory[]>(`${localApi}/ourHistory`);
  return data;
});
