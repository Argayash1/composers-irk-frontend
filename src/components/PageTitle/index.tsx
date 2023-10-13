import React from 'react';

type PageTitleProps = {
  name: string;
};

export const PageTitle: React.FC<PageTitleProps> = ({ name }) => {
  return <h1 className='media__title'>{name}</h1>;
};
