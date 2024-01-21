import React from 'react';
import { NewsBlock, NewsSkeleton } from '../../components';
import './NewsContainer.scss';
import { News, Status } from '../../redux/news/types';
import { Article } from '../../redux/article/types';
import clsx from 'clsx';

type NewsContainerProps = {
  place?: string;
  itemsArray: News[] | Article[];
  status?: Status;
  limit?: number;
  screenWidth: number;
};

export const NewsContainer = ({ place, itemsArray, status, limit, screenWidth }: NewsContainerProps) => {
  const clientWidth = document.documentElement.clientWidth;

  const items = itemsArray.map((item) => (
    <li key={item.id}>
      <NewsBlock {...item} />
    </li>
  ));

  const skeletons = [...new Array(limit)].map((_, index) => (
    <li key={index}>
      <NewsSkeleton screenWidth={screenWidth} />
    </li>
  ));

  const newsContainerClassName = clsx(
    'news-container',
    place === 'main' && 'news-container_place_main',
    place === 'news' && 'news-container_place_news',
    place === 'aboutus' && 'news-container_place_aboutus',
  );

  const newsContainerListClassName = clsx(
    'news-container__news-list',
    (place === 'news' || place === 'aboutus') && 'news-container__news-list_place_news',
    place === 'aboutus' && 'news-container__news-list_place_about-us',
    clientWidth < 1280 && 'news-container__news-list_gap_tablet',
  );

  return (
    <section className={newsContainerClassName}>
      <ul className={newsContainerListClassName}>{status === 'loading' ? skeletons : items}</ul>
    </section>
  );
};

// status === 'loading' ? skeletons : items
