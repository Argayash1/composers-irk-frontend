import { createAsyncThunk } from '@reduxjs/toolkit';
import { OneUnionMemberData, SearchUniomMemberParams, UnionMemberItems, UnionMembersData } from './types';
import axios from 'axios';
import { mainApi } from '../../utils/constants';

export const fetchUnionMembers = createAsyncThunk<UnionMembersData, SearchUniomMemberParams>(
  'unionMember/fetchUnionMembers',
  async (params) => {
    const { currentPage, limit, screenWidth } = params;
    const { data } = await axios.get<UnionMemberItems>(`${mainApi}/members?page=${currentPage}&limit=${limit}&sortBy=surname&order=asc`);

    return { data, screenWidth, currentPage };
  }
);

export const fetchUnionMemberById = createAsyncThunk<OneUnionMemberData, string>(
  'members/fetchUnionMemberById',
  async (id) => {
    const { data } = await axios.get<OneUnionMemberData>(`${mainApi}/members/${id}`);

    return data;
  }
);
