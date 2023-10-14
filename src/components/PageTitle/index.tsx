import React from 'react';
import './PageTitle.scss';

type PageTitleProps = {
  name: string;
};

export const PageTitle: React.FC<PageTitleProps> = ({ name }) => {
  return <h1 className='page-title'>{name}</h1>;
};
