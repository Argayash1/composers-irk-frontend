import { createAsyncThunk } from '@reduxjs/toolkit';
import { Project, SearchProjectParams } from './types';
import axios from 'axios';

export const fetchProjects = createAsyncThunk<Project[], SearchProjectParams>(
  'project/fetchProjectStatus',
  async (params) => {
    const { currentPage, limit } = params;
    const { data } = await axios.get<Project[]>(
      `https://64e36310bac46e480e78b878.mockapi.io/news?page=${currentPage}&limit=${limit}`,
    );
    return data;
  },
);
