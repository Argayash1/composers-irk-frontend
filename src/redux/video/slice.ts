import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Video, VideoSliceState, Status } from './types';
import { fetchVideos } from './asyncActions';

const initialState: VideoSliceState = {
  videoItems: [],
  status: Status.LOADING,
  currentPage: 1,
  limit: 6,
  totalPages: 0,
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Video[]>) {
      state.videoItems = action.payload;
    },

    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },

    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.pending, (state) => {
      state.status = Status.LOADING;
      state.videoItems = [];
    });

    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      const { data, screenWidth, currentPage } = action.payload;
      if (screenWidth <= 638 && currentPage > 1) {
        const newItems = data.videos.filter(
          (item) => !state.videoItems.some((existingItem) => existingItem._id === item._id),
        );
        state.videoItems = [...state.videoItems, ...newItems];
        state.totalPages = data.totalPages;
        state.status = Status.SUCCESS;
      } else {
        state.videoItems = data.videos;
        state.totalPages = data.totalPages;
        state.status = Status.SUCCESS;
      }
    });

    builder.addCase(fetchVideos.rejected, (state) => {
      state.status = Status.ERROR;
      state.videoItems = [];
    });
  },
});

export const { setItems, setCurrentPage } = videoSlice.actions;

export default videoSlice.reducer;
