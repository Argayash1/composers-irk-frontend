import { createAsyncThunk } from '@reduxjs/toolkit';
import { News, NewsData, NewsItems, SearchNewsParams } from './types';
import axios from 'axios';
import { localApi } from '../../utils/constants';

export const fetchNews = createAsyncThunk<NewsData, SearchNewsParams>('news/fetchNewsStatus', async (params) => {
  const { currentPage, limit, screenWidth } = params;
  const { data } = await axios.get<NewsItems>(`${localApi}/news?page=${currentPage}&limit=${limit}`);

  console.log(data);

  return { data, screenWidth, currentPage };
});
