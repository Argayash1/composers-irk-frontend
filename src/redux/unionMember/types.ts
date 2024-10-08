export type UnionMember = {
  _id: string;
  imageUrl: string;
  surname: string;
  patronymic: string;
  name: string;
  profession: string;
  biography: string;
  shortBiography: string;
  works: string;
  awards?: string;
  competitions?: string;
  links?: string;
};

export type UnionMemberItems = {
  data: UnionMember[];
  totalPages: number;
};

export type UnionMembersData = {
  data: UnionMemberItems;
  screenWidth: number;
  currentPage: number;
};

export type OneUnionMemberData = {
  data: UnionMember;
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
  totalPages: number;
  item: UnionMember;
}

export type SearchUniomMemberParams = {
  currentPage: number;
  limit: number;
  screenWidth: number;
};
