import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { localApi } from '../../utils/constants';
import { ScoreItems } from './types';

export const fetchScores = createAsyncThunk<ScoreItems, string>('score/fetchScoresStatus', async (category) => {
  const { data } = await axios.get<ScoreItems>(`${localApi}/scores?${category}`);

  return data;
});
