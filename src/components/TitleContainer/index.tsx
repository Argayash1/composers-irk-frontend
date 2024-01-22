import React from 'react';
import './TitleContainer.scss';
import { Link } from 'react-router-dom';
import { CTA } from '../CTA';
import clsx from 'clsx';

type PageTitleProps = {
  name: string;
  path?: string;
  place?: string;
  value?: number;
};

export const TitleContainer = ({ name, path = '/', place, value }: PageTitleProps) => {
  const titleContainerClass = clsx(
    'title-container',
    place === 'main' && 'title-container_place_main',
    place === 'full-news' && 'title-container_place_full-news',
    place === 'union-members' && 'title-container_place_union-members',
    place === 'full-union-member' && 'title-container_place_full-union-member',
    place === 'projects' && 'title-container_place_projects',
    (place === 'full-project' || place === 'media') && 'title-container_place_full-project',
    place === 'scores' && 'title-container_place_scores',
    (place === 'full-video' || place === 'reports' || place === 'aboutus') && 'title-container_place_reports',
    place === 'full-video' && 'title-container_place_full-video',
    place === 'full-article' && 'title-container_place_full-article',
    place === 'contacts' && 'title-container_place_contacts',
    value === 1 && 'title-container_tabs_right',
  );

  const pageTitleClass = clsx(
    'title-container__page-title',
    place === 'main' && 'title-container__page-title_place_main',
    place === 'news' && 'title-container__page-title_place_news',
    place === 'full-news' && 'title-container__page-title_place_full-news',
    place === 'full-union-member' && 'title-container__page-title_place_full-union-member',
    place === 'projects' && 'title-container__page-title_place_projects',
    place === 'full-project' && 'title-container__page-title_place_full-project',
    (place === 'scores' ||
      place === 'media' ||
      place === 'full-video' ||
      place === 'reports' ||
      place === 'aboutus' ||
      place === 'contacts') &&
      'title-container__page-title_place_scores',
    place === 'full-article' && 'title-container__page-title_place_full-article',
    place === 'search-results' && 'title-container__page-title_place_search-results',
    place === 'search' && 'title-container__page-title_place_search',
  );

  const arrowLinkClass = clsx(
    'title-container__arrow-link',
    place === 'main' && 'title-container__arrow-link_place_main',
    place === 'search-results' && 'title-container__arrow-link_place_search-results',
    (place === 'union-members' ||
      place === 'projects' ||
      place === 'scores' ||
      place === 'media' ||
      place === 'full-video' ||
      place === 'reports' ||
      place === 'aboutus' ||
      place === 'contacts') &&
      'title-container__arrow-link_place_union-members',
    (place === 'full-project' || place === 'full-article') && 'title-container__arrow-link_place_full-project',
  );

  return (
    <section className={titleContainerClass}>
      <Link to={path} className={arrowLinkClass}>
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
      {place === 'main' ? <h2 className={pageTitleClass}>{name}</h2> : <h1 className={pageTitleClass}>{name}</h1>}
      {place === 'main' && <CTA linkText='Все новости' path='/news' place='main' />}
    </section>
  );
};
