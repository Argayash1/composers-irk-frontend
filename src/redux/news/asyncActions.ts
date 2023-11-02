import { createAsyncThunk } from '@reduxjs/toolkit';
import { News } from './types';
import axios from 'axios';

export const fetchNews = createAsyncThunk<News[]>('news/fetchNewsStatus', async () => {
  const { data } = await axios.get<News[]>(`https://64e36310bac46e480e78b878.mockapi.io/news`);
  return data;
});
