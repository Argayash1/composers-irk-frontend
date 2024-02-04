import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Video, VideoSliceState, Status } from './types';
import { fetchVideoById, fetchVideos } from './asyncActions';

const initialState: VideoSliceState = {
  videoItems: [],
  status: Status.LOADING,
  currentPage: 1,
  limit: 6,
  totalPages: 0,
  videoItem: { _id: '', iframeUrl: '', title: '', composer: '', performer: '', createdAt: '', about: '' },
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
        const newItems = data.data.filter(
          (item) => !state.videoItems.some((existingItem) => existingItem._id === item._id),
        );
        state.videoItems = [...state.videoItems, ...newItems];
        state.totalPages = data.totalPages;
        state.status = Status.SUCCESS;
      } else {
        state.videoItems = data.data;
        state.totalPages = data.totalPages;
        state.status = Status.SUCCESS;
      }
    });

    builder.addCase(fetchVideos.rejected, (state) => {
      state.status = Status.ERROR;
      state.videoItems = [];
    });

    builder.addCase(fetchVideoById.pending, (state) => {
      state.status = Status.LOADING;
      state.videoItem = { _id: '', iframeUrl: '', title: '', composer: '', performer: '', createdAt: '', about: '' };
    });

    builder.addCase(fetchVideoById.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.videoItem = action.payload;
    });

    builder.addCase(fetchVideoById.rejected, (state) => {
      state.status = Status.LOADING;
      state.videoItem = { _id: '', iframeUrl: '', title: '', composer: '', performer: '', createdAt: '', about: '' };
    });
  },
});

export const { setItems, setCurrentPage } = videoSlice.actions;

export default videoSlice.reducer;
