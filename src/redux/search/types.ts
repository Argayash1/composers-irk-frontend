export type Item = {
  _id: string;
  imageUrl?: string;
  title?: string;
  name?: string;
  surname?: string;
  profession?: string;
  biography?: string;
  description?: string;
  newsText?: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type SearchItems = {
  results: CombinedArrayObject[];
  totalPages: number;
};

export interface SearchSliceState {
  currentPage: number;
  totalPages: number;
  screenWidth: number;
  isSearchOpen: boolean;
  searchValue: string;
  searchResults: Item[];
  errorText: string;
  status: Status;
}

export interface CombinedArrayObject {
  _id: string;
  [key: string]: string | string[];
}

export type SearchParams = {
  query: string;
  currentPage: number;
  limit: string;
  screenWidth: number;
};

export type SearchData = {
  data: SearchItems;
  screenWidth: number;
  currentPage: number;
};
