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

export interface SearchSliceState {
  currentPage: number;
  isSearchOpen: boolean;
  searchValue: string;
  searchResults: Item[];
  errorText: string;
  combinedArray: CombinedArrayObject[];
  status: Status;
}

export interface CombinedArrayObject {
  _id: string;
  [key: string]: string | string[];
}
