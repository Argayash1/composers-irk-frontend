import { createAsyncThunk } from '@reduxjs/toolkit';
import { Video, SearchVideoParams } from './types';
import axios from 'axios';

export const fetchVideos = createAsyncThunk<Video[], SearchVideoParams>('video/fetchVideoStatus', async (params) => {
  const { currentPage, limit } = params;
  const { data } = await axios.get<Video[]>(
    `https://64e36310bac46e480e78b878.mockapi.io/news?page=${currentPage}&limit=${limit}`,
  );
  return data;
});
