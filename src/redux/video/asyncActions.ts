import { createAsyncThunk } from '@reduxjs/toolkit';
import { OneVideoData, SearchVideoParams, VideoData, VideoItems } from './types';
import axios from 'axios';
import { localApi } from '../../utils/constants';

export const fetchVideos = createAsyncThunk<VideoData, SearchVideoParams>('video/fetchVideos', async (params) => {
  const { currentPage, limit, screenWidth } = params;
  const { data } = await axios.get<VideoItems>(`${localApi}/videos?page=${currentPage}&limit=${limit}`);

  return { data, screenWidth, currentPage };
});

export const fetchVideoById = createAsyncThunk<OneVideoData, string>('video/fetchVideoById', async (id) => {
  const { data } = await axios.get<OneVideoData>(`${localApi}/videos/${id}`);

  return data;
});
