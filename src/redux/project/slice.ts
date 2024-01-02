import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project, ProjectSliceState, Status } from './types';
import { fetchProjects } from './asyncActions';

const initialState: ProjectSliceState = {
  items: [],
  status: Status.LOADING,
  currentPage: 1,
  limit: 6,
};

const projectSlice = createSlice({
  name: 'unionMember',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Project[]>) {
      state.items = action.payload;
    },

    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchProjects.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems, setCurrentPage } = projectSlice.actions;

export default projectSlice.reducer;
