export type Score = {
  _id: string;
  url: string;
  title: string;
  composer: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type ScoreItems = {
  data: Score[];
  totalPages: number;
};

export interface ScoreSliceState {
  items: Score[];
  status: Status; //'loading' | 'success' | 'error';
  categoryId: number;
}
