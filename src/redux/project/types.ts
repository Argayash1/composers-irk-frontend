export type Project = {
  _id: string;
  imageUrl: string;
  title: string;
  description: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type ProjectItems = {
  projects: Project[];
  totalPages: number;
};

export type ProjectData = {
  data: ProjectItems;
  currentPage: number;
  screenWidth: number;
};

export interface ProjectSliceState {
  items: Project[];
  status: Status; //'loading' | 'success' | 'error';
  currentPage: number;
  limit: number;
  totalPages: number;
  item: Project;
}

export type SearchProjectParams = {
  currentPage: number;
  limit: number;
  screenWidth: number;
};
