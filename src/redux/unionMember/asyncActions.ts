import { createAsyncThunk } from '@reduxjs/toolkit';
import { OneUnionMemberData, SearchUniomMemberParams, UnionMemberItems, UnionMembersData } from './types';
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

export const fetchUnionMemberById = createAsyncThunk<OneUnionMemberData, string>(
  'members/fetchUnionMemberById',
  async (id) => {
    const { data } = await axios.get<OneUnionMemberData>(`${localApi}/members/${id}`);

    return data;
  },
);
