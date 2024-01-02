import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article, SearchArticleParams } from './types';
import axios from 'axios';

export const fetchArticles = createAsyncThunk<Article[], SearchArticleParams>(
  'article/fetchArticleStatus',
  async (params) => {
    const { currentPage, limit } = params;
    const { data } = await axios.get<Article[]>(
      `https://64e36310bac46e480e78b878.mockapi.io/news?page=${currentPage}&limit=${limit}`,
    );
    return data;
  },
);
