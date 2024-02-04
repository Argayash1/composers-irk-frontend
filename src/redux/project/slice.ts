import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project, ProjectSliceState, Status } from './types';
import { fetchProjectById, fetchProjects } from './asyncActions';

const initialState: ProjectSliceState = {
  items: [],
  status: Status.LOADING,
  currentPage: 1,
  limit: 6,
  totalPages: 0,
  item: { _id: '', imageUrl: '', title: '', description: '' },
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
    });

    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      const { data, screenWidth, currentPage } = action.payload;

      if (screenWidth <= 1126 && currentPage > 1) {
        const newItems = data.data.filter((item) => !state.items.some((existingItem) => existingItem._id === item._id));

        state.items = [...state.items, ...newItems];
        state.totalPages = data.totalPages;
        state.status = Status.SUCCESS;
      } else {
        state.items = data.data;
        state.totalPages = data.totalPages;
        state.status = Status.SUCCESS;
      }
    });

    builder.addCase(fetchProjects.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });

    builder.addCase(fetchProjectById.pending, (state) => {
      state.status = Status.LOADING;
      state.item = { _id: '', imageUrl: '', title: '', description: '' };
    });

    builder.addCase(fetchProjectById.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.item = action.payload;
    });

    builder.addCase(fetchProjectById.rejected, (state) => {
      state.status = Status.LOADING;
      state.item = { _id: '', imageUrl: '', title: '', description: '' };
    });
  },
});

export const { setItems, setCurrentPage } = projectSlice.actions;

export default projectSlice.reducer;
