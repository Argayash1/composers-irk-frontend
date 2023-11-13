import { createAsyncThunk } from '@reduxjs/toolkit';
import { News } from './types';
import axios from 'axios';

export const fetchNews = createAsyncThunk<News[], number>('news/fetchNewsStatus', async (currentPage) => {
  const { data } = await axios.get<News[]>(
    `https://64e36310bac46e480e78b878.mockapi.io/news?page=${currentPage}&limit=9`,
  );

  return data;
});
