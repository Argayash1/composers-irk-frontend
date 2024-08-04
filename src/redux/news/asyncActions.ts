import { createAsyncThunk } from '@reduxjs/toolkit';
import { NewsData, NewsItems, OneNewsData, SearchNewsParams } from './types';
import axios from 'axios';
import { mainApi } from '../../utils/constants';

export const fetchNews = createAsyncThunk<NewsData, SearchNewsParams>('news/fetchNews', async (params) => {
  const { currentPage, limit, screenWidth } = params;
  const { data } = await axios.get<NewsItems>(`${mainApi}/news?page=${currentPage}&limit=${limit}`);

  return { data, screenWidth, currentPage };
});

export const fetchNewsById = createAsyncThunk<OneNewsData, string>('news/fetchNewsById', async (id) => {
  const { data } = await axios.get<OneNewsData>(`${mainApi}/news/${id}`);

  return data;
});
