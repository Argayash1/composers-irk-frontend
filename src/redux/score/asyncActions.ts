import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { mainApi } from '../../utils/constants';
import { ScoreItems } from './types';

export const fetchScores = createAsyncThunk<ScoreItems, string>('score/fetchScoresStatus', async (category) => {
  const { data } = await axios.get<ScoreItems>(`${mainApi}/scores?${category}`);

  return data;
});
