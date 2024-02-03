import React from 'react';
import { TitleContainer, SearchForm } from '../components';

const Search = () => {
  const [query, setQuery] = React.useState<string>('');

  return (
    <main className='search-page'>
      <TitleContainer name='Поиск' place='search' />
      <SearchForm
        place='search'
        query={query}
        onClearQuery={() => setQuery('')}
        onChange={(e) => setQuery(e.target.value)}
      />
    </main>
  );
};

export default Search;
