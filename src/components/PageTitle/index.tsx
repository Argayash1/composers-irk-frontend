import React from 'react';
import './PageTitle.scss';

type PageTitleProps = {
  name: string;
  place?: string;
};

export const PageTitle: React.FC<PageTitleProps> = ({ name, place }) => {
  const pageTitleClassName = `page-title ${place === 'main' ? 'page-title_place_main' : ''} ${
    place === 'full-news' ? 'page-title_place_full-news' : ''
  }`;

  return (
    <>
      {place === 'main' ? (
        <h2 className={pageTitleClassName}>{name}</h2>
      ) : (
        <h1 className={pageTitleClassName}>{name}</h1>
      )}
    </>
  );
};