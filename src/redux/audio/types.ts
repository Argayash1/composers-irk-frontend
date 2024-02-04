export interface IAudio {
  _id: string;
  audioUrl: string;
  composer: string;
  title: string;
  performer: string;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type AudiosItems = {
  data: IAudio[];
  totalPages: number;
};

export interface AudioSliceState {
  items: IAudio[];
  status: Status; //'loading' | 'success' | 'error';
}
