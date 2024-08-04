import { createAsyncThunk } from '@reduxjs/toolkit';
import { AudiosItems } from './types';
import axios from 'axios';
import { mainApi } from '../../utils/constants';

export const fetchAudios = createAsyncThunk<AudiosItems>('audio/fetchAudioStatus', async () => {
  const { data } = await axios.get<AudiosItems>(`${mainApi}/audios`);
  return data;
});
