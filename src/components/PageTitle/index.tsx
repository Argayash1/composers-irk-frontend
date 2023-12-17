import React from 'react';
import './PageTitle.scss';
import { ArrowLink } from '../ArrowLink';

type PageTitleProps = {
  name: string;
  place?: string;
};

export const PageTitle = ({ name, place }: PageTitleProps) => {
  const pageTitleClassName = `page-title ${place === 'main' ? 'page-title_place_main' : ''} ${
    place === 'full-news' ? 'page-title_place_full-news' : ''
  }`;

  return (
    <section>
      {place === 'main' ? (
        <h2 className={pageTitleClassName}>{name}</h2>
      ) : (
        <h1 className={pageTitleClassName}>{name}</h1>
      )}
    </section>
  );
};
