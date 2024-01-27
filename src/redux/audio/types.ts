export interface IAudio {
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

export interface AudioSliceState {
  items: IAudio[];
  status: Status; //'loading' | 'success' | 'error';
}
