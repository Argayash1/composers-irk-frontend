export type Item = {
  imageUrl?: string;
  title?: string;
  name?: string;
  surname?: string;
  profession?: string;
  biography?: string;
  description?: string;
  newsText?: string;
};

export interface SearchSliceState {
  currentPage: number;
  isSearchOpen: boolean;
  searchValue: string;
  searchResults: Item[];
  errorText: string;
}
