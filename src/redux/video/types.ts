export type Video = {
  id: string;
  iframeUrl: string;
  title: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface VideoSliceState {
  items: Video[];
  status: Status; //'loading' | 'success' | 'error';
  currentPage: number;
  limit: number;
}

export type SearchVideoParams = {
  currentPage: number;
  limit: number;
};
