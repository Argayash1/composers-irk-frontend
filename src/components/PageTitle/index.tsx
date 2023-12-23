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
  } ${place === 'union-members' || place === 'full-union-member' ? 'page-title_place_union-members' : ''} ${
    place === 'projects' ? 'page-title_place_projects' : ''
  } ${place === 'full-project' || place === 'media' ? 'page-title_place_full-project' : ''} ${
    place === 'reports' || place === 'aboutus' || place === 'full-video' ? 'page-title_place_reports' : ''
  } ${place === 'full-article' ? 'page-title_place_full-article' : ''}`;

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
