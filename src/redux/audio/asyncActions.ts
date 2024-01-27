import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAudio } from './types';
import axios from 'axios';
import { localApi } from '../../utils/constants';

export const fetchAudios = createAsyncThunk<IAudio[]>('audio/fetchAudioStatus', async () => {
  const { data } = await axios.get<IAudio[]>(`${localApi}/audios`);
  return data;
});
