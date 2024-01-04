export type News = {
  id: string;
  title: string;
  imageUrl: string;
  newsText: string;
  createdAt: string;
};

export type NewsData = {
  data: News[];
  screenWidth: number;
  currentPage: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface NewsSliceState {
  items: News[];
  status: Status; //'loading' | 'success' | 'error';
  currentPage: number;
  limit: number;
}

export type SearchNewsParams = {
  currentPage: number;
  limit: number;
  screenWidth: number;
};
