import { createAsyncThunk } from '@reduxjs/toolkit';
import { Project, ProjectData, ProjectItems, SearchProjectParams } from './types';
import axios from 'axios';
import { localApi } from '../../utils/constants';

export const fetchProjects = createAsyncThunk<ProjectData, SearchProjectParams>(
  'project/fetchProjects',
  async (params) => {
    const { currentPage, limit, screenWidth } = params;
    const { data } = await axios.get<ProjectItems>(`${localApi}/projects?page=${currentPage}&limit=${limit}`);
    return { data, screenWidth, currentPage };
  },
);

export const fetchProjectById = createAsyncThunk<Project, string>('projects/fetchProjectById', async (id) => {
  const { data } = await axios.get<Project>(`${localApi}/projects/${id}`);

  return data;
});
