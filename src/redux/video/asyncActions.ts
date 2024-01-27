import { createAsyncThunk } from '@reduxjs/toolkit';
import { SearchVideoParams, VideoData, VideoItems } from './types';
import axios from 'axios';
import { localApi } from '../../utils/constants';

export const fetchVideos = createAsyncThunk<VideoData, SearchVideoParams>('video/fetchVideoStatus', async (params) => {
  const { currentPage, limit, screenWidth } = params;
  const { data } = await axios.get<VideoItems>(`${localApi}/videos?page=${currentPage}&limit=${limit}`);

  return { data, screenWidth, currentPage };
});
