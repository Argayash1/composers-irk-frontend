import { createAsyncThunk } from '@reduxjs/toolkit';
import { ArticleData, ArticleItems, OneArticleData, SearchArticleParams } from './types';
import axios from 'axios';
import { mainApi } from '../../utils/constants';

export const fetchArticles = createAsyncThunk<ArticleData, SearchArticleParams>(
  'article/fetchArticles',
  async (params) => {
    const { currentPage, limit, screenWidth } = params;
    const { data } = await axios.get<ArticleItems>(`${mainApi}/articles?page=${currentPage}&limit=${limit}`);
    return { data, screenWidth, currentPage };
  }
);

export const fetchArticleById = createAsyncThunk<OneArticleData, string>('article/fetchArticleById', async (id) => {
  const { data } = await axios.get<OneArticleData>(`${mainApi}/articles/${id}`);

  return data;
});
