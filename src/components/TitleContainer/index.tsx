import React from 'react';
import './TitleContainer.scss';
import { Link } from 'react-router-dom';

type PageTitleProps = {
  name: string;
  path: string;
  place?: string;
};

export const TitleContainer = ({ name, path, place }: PageTitleProps) => {
  const pageTitleClassName = `title-container__page-title ${
    place === 'main' ? 'title-container__page-title_place_main' : ''
  } ${place === 'full-news' ? 'title-container__page-title_place_full-news' : ''} ${
    place === 'union-members' || place === 'full-union-member' ? 'title-container__page-title_place_union-members' : ''
  } ${place === 'projects' ? 'title-container__page-title_place_projects' : ''} ${
    place === 'full-project' || place === 'media' ? 'title-container__page-title_place_full-project' : ''
  } ${
    place === 'reports' || place === 'aboutus' || place === 'full-video'
      ? 'title-container__page-title_place_reports'
      : ''
  } ${place === 'full-article' ? 'title-container__page-title_place_full-article' : ''} ${
    place === 'search-results' ? 'title-container__page-title_place_search-results' : ''
  } ${place === 'search' ? 'title-container__page-title_place_search' : ''}`;

  return (
    <section className={`title-container ${place === 'main' ? 'title-container_place_main' : ''}`}>
      <Link
        to={path}
        className={`title-container__arrow-link ${place === 'main' ? 'title-container__arrow-link_place_main' : ''}`}
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <path
            d='M15 20L7.5 12.5L15 5'
            stroke='#303A3D'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </Link>
      {place === 'main' ? (
        <h2 className={pageTitleClassName}>{name}</h2>
      ) : (
        <h1 className={pageTitleClassName}>{name}</h1>
      )}
    </section>
  );
};
