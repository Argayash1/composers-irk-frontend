import { createAsyncThunk } from '@reduxjs/toolkit';
import { SearchUniomMemberParams, UnionMemberItems, UnionMembersData } from './types';
import axios from 'axios';
import { localApi } from '../../utils/constants';

export const fetchUnionMembers = createAsyncThunk<UnionMembersData, SearchUniomMemberParams>(
  'unionMember/fetchUnionMemberStatus',
  async (params) => {
    const { currentPage, limit, screenWidth } = params;
    const { data } = await axios.get<UnionMemberItems>(`${localApi}/members?page=${currentPage}&limit=${limit}`);

    return { data, screenWidth, currentPage };
  },
);
