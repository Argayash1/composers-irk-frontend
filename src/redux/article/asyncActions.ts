import { createAsyncThunk } from '@reduxjs/toolkit';
import { ArticleData, ArticleItems, SearchArticleParams } from './types';
import axios from 'axios';
import { localApi } from '../../utils/constants';

export const fetchArticles = createAsyncThunk<ArticleData, SearchArticleParams>(
  'article/fetchArticleStatus',
  async (params) => {
    const { currentPage, limit, screenWidth } = params;
    const { data } = await axios.get<ArticleItems>(`${localApi}/articles?page=${currentPage}&limit=${limit}`);
    return { data, screenWidth, currentPage };
  },
);
