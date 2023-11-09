import React from 'react';
import './SearchResult.scss';
import { Link } from 'react-router-dom';

type SearchResultProps = {
  title: string;
  description: string;
  path: string;
};

export const SearchResult: React.FC<SearchResultProps> = ({ title, description, path }) => {
  return (
    <Link to={path} className='search-result'>
      <h2 className='search-result__title'>{title}</h2>
      <p className='search-result__description'>{description}</p>
    </Link>
  );
};
