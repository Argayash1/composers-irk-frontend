import { createAsyncThunk } from '@reduxjs/toolkit';
import { SearchVideoParams, Video, VideoData, VideoItems } from './types';
import axios from 'axios';
import { localApi } from '../../utils/constants';

export const fetchVideos = createAsyncThunk<VideoData, SearchVideoParams>('video/fetchVideos', async (params) => {
  const { currentPage, limit, screenWidth } = params;
  const { data } = await axios.get<VideoItems>(`${localApi}/videos?page=${currentPage}&limit=${limit}`);

  return { data, screenWidth, currentPage };
});

export const fetchVideoById = createAsyncThunk<Video, string>('video/fetchVideoById', async (id) => {
  const { data } = await axios.get<Video>(`${localApi}/videos/${id}`);

  return data;
});
