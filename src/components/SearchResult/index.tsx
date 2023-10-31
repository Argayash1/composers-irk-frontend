import React from 'react';
import './SearchResult.scss';

type SearchResultProps = {
  title: string;
  description: string;
};

export const SearchResult: React.FC<SearchResultProps> = ({ title, description }) => {
  return (
    <div className='search-result'>
      <h2 className='search-result__title'>{title}</h2>
      <p className='search-result__description'>{description}</p>
    </div>
  );
};
