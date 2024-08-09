import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { mainApi } from '../../utils/constants';
import { SearchData, SearchItems, SearchParams } from './types';

export const fetchSearchResults = createAsyncThunk<SearchData, SearchParams>(
  'search/fetchSearchResults',
  async (params) => {
    const { query, currentPage, limit, screenWidth } = params;

    const { data } = await axios.get<SearchItems>(`${mainApi}/search?${query}&page=${currentPage}&${limit}`);

    return { data, screenWidth, currentPage };
  }
);
