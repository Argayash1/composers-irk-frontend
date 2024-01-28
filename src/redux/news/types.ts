export type News = {
  _id: string;
  title: string;
  imageUrl: string;
  newsText: string;
  createdAt: string;
};

export type NewsItems = {
  news: News[];
  totalPages: number;
};

export type NewsData = {
  data: NewsItems;
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
  totalPages: number;
  item: News;
}

export type SearchNewsParams = {
  currentPage: number;
  limit: number;
  screenWidth: number;
};
