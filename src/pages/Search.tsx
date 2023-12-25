import React from 'react';
import { PageTitle, SearchForm } from '../components';

const Search = () => {
  return (
    <main className='search-page'>
      <section className='search-page__title-container'>
        <PageTitle name='Поиск' place='search' />
      </section>
      <section>
        <SearchForm place='search' />
      </section>
    </main>
  );
};

export default Search;
