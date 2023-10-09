import React from 'react';
import { SearchButton } from '../SearchButton';
import './Search.scss';
import { CloseButton } from '../CloseButton';

export const Search = () => {
  return (
    <section className='search'>
      <form action=''>
        <input className='search__input' type='text' />
        <div className='search__buttons'>
          <SearchButton type='submit' />
          <CloseButton />
        </div>
      </form>
      <CloseButton />
    </section>
  );
};
