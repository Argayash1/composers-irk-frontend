import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { localApi } from '../../utils/constants';
import { CombinedArrayObject } from './types';

export const fetchCombinedArray = createAsyncThunk<CombinedArrayObject[]>('search/fetchCombinedArray', async () => {
  const { data } = await axios.get<CombinedArrayObject[]>(`${localApi}/combined`);

  return data;
});
