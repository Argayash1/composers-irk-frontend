import React from 'react';
import './ArrowLink.scss';
import { Link } from 'react-router-dom';

type ArrowLinkProps = {
  path: string;
};

export const ArrowLink = ({ path }: ArrowLinkProps) => {
  return (
    <Link to={path} className='arrow-link'>
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <path
          d='M15 20L7.5 12.5L15 5'
          stroke='#303A3D'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </Link>
  );
};
