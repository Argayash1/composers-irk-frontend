export type Article = {
  _id: string;
  imageUrl: string;
  createdAt: string;
  title: string;
  articleDescription: string;
  articleText: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type ArticleItems = {
  articles: Article[];
  totalPages: number;
};

export type ArticleData = {
  data: ArticleItems;
  currentPage: number;
  screenWidth: number;
};

export interface ArticleSliceState {
  items: Article[];
  status: Status; //'loading' | 'success' | 'error';
  currentPage: number;
  limit: number;
  totalPages: number;
  item: Article;
}

export type SearchArticleParams = {
  currentPage: number;
  limit: number;
  screenWidth: number;
};
