import { createAsyncThunk } from '@reduxjs/toolkit';
import { SearchUniomMemberParams, UnionMember, UnionMemberItems, UnionMembersData } from './types';
import axios from 'axios';
import { localApi } from '../../utils/constants';

export const fetchUnionMembers = createAsyncThunk<UnionMembersData, SearchUniomMemberParams>(
  'unionMember/fetchUnionMembers',
  async (params) => {
    const { currentPage, limit, screenWidth } = params;
    const { data } = await axios.get<UnionMemberItems>(`${localApi}/members?page=${currentPage}&limit=${limit}`);

    return { data, screenWidth, currentPage };
  },
);

export const fetchUnionMemberById = createAsyncThunk<UnionMember, string>(
  'members/fetchUnionMemberById',
  async (id) => {
    const { data } = await axios.get<UnionMember>(`${localApi}/members/${id}`);

    return data;
  },
);
