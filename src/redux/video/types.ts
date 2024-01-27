export type Video = {
  _id: string;
  iframeUrl: string;
  title: string;
  composer: string;
  performer?: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type VideoItems = {
  videos: Video[];
  totalPages: number;
};

export type VideoData = {
  data: VideoItems;
  currentPage: number;
  screenWidth: number;
};

export interface VideoSliceState {
  videoItems: Video[];
  status: Status; //'loading' | 'success' | 'error';
  currentPage: number;
  limit: number;
  totalPages: number;
}

export type SearchVideoParams = {
  currentPage: number;
  limit: number;
  screenWidth: number;
};
