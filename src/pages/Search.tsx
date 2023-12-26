import React from 'react';
import { TitleContainer, SearchForm } from '../components';

const Search = () => {
  return (
    <main className='search-page'>
      <section className='search-page__title-container'>
        <TitleContainer name='Поиск' place='search' path='/' />
      </section>
      <section>
        <SearchForm place='search' />
      </section>
    </main>
  );
};

export default Search;
