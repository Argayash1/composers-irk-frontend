import { createAsyncThunk } from '@reduxjs/toolkit';
import { News, SearchNewsParams } from './types';
import axios from 'axios';

export const fetchNews = createAsyncThunk<News[], SearchNewsParams>('news/fetchNewsStatus', async (params) => {
  const { currentPage, limit } = params;
  const { data } = await axios.get<News[]>(
    `https://64e36310bac46e480e78b878.mockapi.io/news?page=${currentPage}&limit=${limit}`,
  );

  return data;
});
