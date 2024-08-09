import { createAsyncThunk } from '@reduxjs/toolkit';
import { OneProjectData, ProjectData, ProjectItems, SearchProjectParams } from './types';
import axios from 'axios';
import { mainApi } from '../../utils/constants';

export const fetchProjects = createAsyncThunk<ProjectData, SearchProjectParams>(
  'project/fetchProjects',
  async (params) => {
    const { currentPage, limit, screenWidth } = params;
    const { data } = await axios.get<ProjectItems>(`${mainApi}/projects?page=${currentPage}&limit=${limit}`);
    return { data, screenWidth, currentPage };
  }
);

export const fetchProjectById = createAsyncThunk<OneProjectData, string>('projects/fetchProjectById', async (id) => {
  const { data } = await axios.get<OneProjectData>(`${mainApi}/projects/${id}`);

  return data;
});
