export type UnionMember = {
  id: string;
  imageUrl: string;
  surname: string;
  name: string;
  profession: string;
  biography: string[];
  shortBiography: string;
  works: string[];
  awards?: string[];
  competitions?: string[];
  links?: string[];
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface UniomMemberSliceState {
  items: UnionMember[];
  status: Status; //'loading' | 'success' | 'error';
  currentPage: number;
  limit: number;
}

export type SearchUniomMemberParams = {
  currentPage: number;
  limit: number;
};
