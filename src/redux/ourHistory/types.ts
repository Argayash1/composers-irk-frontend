export interface IOurHistory {
  _id: string;
  text: string;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type ourHistoryItems = {
  data: IOurHistory[];
  totalPages: number;
};

export interface OurHistorySliceState {
  historyItem: IOurHistory;
  historyStatus: Status; //'loading' | 'success' | 'error';
}
