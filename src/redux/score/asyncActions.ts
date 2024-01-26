import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { localApi } from '../../utils/constants';
import { Score } from './types';

export const fetchScores = createAsyncThunk<Score[], number | string>('score/fetchScoresStatus', async (category) => {
  const { data } = await axios.get<Score[]>(`${localApi}/scores?category=${category}`);

  return data;
});
