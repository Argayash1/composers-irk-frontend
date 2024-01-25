import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProjectData, ProjectItems, SearchProjectParams } from './types';
import axios from 'axios';
import { localApi } from '../../utils/constants';

export const fetchProjects = createAsyncThunk<ProjectData, SearchProjectParams>(
  'project/fetchProjectStatus',
  async (params) => {
    const { currentPage, limit, screenWidth } = params;
    const { data } = await axios.get<ProjectItems>(`${localApi}/projects?page=${currentPage}&limit=${limit}`);
    return { data, screenWidth, currentPage };
  },
);
