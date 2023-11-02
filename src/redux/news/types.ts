export type News = {
  title: string;
  imageUrl: string;
  newsText: string;
  createdAt: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface NewsSliceState {
  items: News[];
  status: Status; //'loading' | 'success' | 'error';
}

export type SearchPizzaParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};
