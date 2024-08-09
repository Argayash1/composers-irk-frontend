export interface IReport {
  _id: string;
  year: string;
  imageUrl: string;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type ReportsItems = {
  data: IReport[];
  totalPages: number;
};

export interface ReportSliceState {
  items: IReport[];
  status: Status; //'loading' | 'success' | 'error';
}
