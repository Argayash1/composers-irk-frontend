import { createAsyncThunk } from '@reduxjs/toolkit';
import { News, NewsData, SearchNewsParams } from './types';
import axios from 'axios';

export const fetchNews = createAsyncThunk<NewsData, SearchNewsParams>('news/fetchNewsStatus', async (params) => {
  const { currentPage, limit, screenWidth } = params;
  const { data } = await axios.get<News[]>(
    `https://64e36310bac46e480e78b878.mockapi.io/news?page=${currentPage}&limit=${limit}`,
  );

  return { data, screenWidth, currentPage };
});
