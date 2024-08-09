export type Video = {
  _id: string;
  iframeUrl: string;
  title: string;
  composer: string;
  performer?: string;
  createdAt: string;
  about: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type VideoItems = {
  data: Video[];
  totalPages: number;
};

export type VideoData = {
  data: VideoItems;
  currentPage: number;
  screenWidth: number;
};

export type OneVideoData = {
  data: Video;
};

export interface VideoSliceState {
  videoItems: Video[];
  status: Status; //'loading' | 'success' | 'error';
  currentPage: number;
  limit: number;
  totalPages: number;
  videoItem: Video;
}

export type SearchVideoParams = {
  currentPage: number;
  limit: number;
  screenWidth: number;
};
