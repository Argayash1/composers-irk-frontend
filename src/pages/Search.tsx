import React from 'react';
import { TitleContainer, SearchForm } from '../components';

const Search = () => {
  return (
    <main className='search-page'>
      <TitleContainer name='Поиск' place='search' />
      <SearchForm place='search' />
    </main>
  );
};

export default Search;
