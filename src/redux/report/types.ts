export interface IReport {
  year: string;
  imageUrl: string;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface ReportSliceState {
  items: IReport[];
  status: Status; //'loading' | 'success' | 'error';
}
