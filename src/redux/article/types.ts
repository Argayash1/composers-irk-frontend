export type Article = {
  _id: string;
  imageUrl: string;
  createdAt: string;
  title: string;
  articleDescription: string;
  articleText: string[];
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface ArticleSliceState {
  items: Article[];
  status: Status; //'loading' | 'success' | 'error';
  currentPage: number;
  limit: number;
}

export type SearchArticleParams = {
  currentPage: number;
  limit: number;
};
