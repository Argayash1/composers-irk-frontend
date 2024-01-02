import { createAsyncThunk } from '@reduxjs/toolkit';
import { UnionMember, SearchUniomMemberParams } from './types';
import axios from 'axios';

export const fetchUnionMembers = createAsyncThunk<UnionMember[], SearchUniomMemberParams>(
  'unionMember/fetchUnionMemberStatus',
  async (params) => {
    const { currentPage, limit } = params;
    const { data } = await axios.get<UnionMember[]>(
      `https://64e36310bac46e480e78b878.mockapi.io/news?page=${currentPage}&limit=${limit}`,
    );
    return data;
  },
);
