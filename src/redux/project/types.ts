export type Project = {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface ProjectSliceState {
  items: Project[];
  status: Status; //'loading' | 'success' | 'error';
  currentPage: number;
  limit: number;
}

export type SearchProjectParams = {
  currentPage: number;
  limit: number;
};
