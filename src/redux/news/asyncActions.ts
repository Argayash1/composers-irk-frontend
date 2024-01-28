import { createAsyncThunk } from '@reduxjs/toolkit';
import { News, NewsData, NewsItems, SearchNewsParams } from './types';
import axios from 'axios';
import { localApi } from '../../utils/constants';

export const fetchNews = createAsyncThunk<NewsData, SearchNewsParams>('news/fetchNews', async (params) => {
  const { currentPage, limit, screenWidth } = params;
  const { data } = await axios.get<NewsItems>(`${localApi}/news?page=${currentPage}&limit=${limit}`);

  return { data, screenWidth, currentPage };
});

export const fetchNewsById = createAsyncThunk<News, string>('news/fetchNewsById', async (id) => {
  const { data } = await axios.get<News>(`${localApi}/news/${id}`);

  return data;
});
