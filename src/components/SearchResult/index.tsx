import React from 'react';
import './SearchResult.scss';
import { Link } from 'react-router-dom';

interface SearchResultProps {
  [key: string]: string | string[];
  path: string;
}

export const SearchResult = ({ title, description, path }: SearchResultProps) => {
  return (
    <Link to={path} className='search-result'>
      <h2 className='search-result__title'>{title}</h2>
      <p className='search-result__description'>{description}</p>
    </Link>
  );
};
