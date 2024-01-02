import React from 'react';
import { NewsBlock, NewsSkeleton } from '../../components';
import './NewsContainer.scss';
import { News, Status } from '../../redux/news/types';
import { Article } from '../../redux/article/types';

type NewsContainerProps = {
  place?: string;
  itemsArray: News[] | Article[];
  status?: Status;
  limit: number;
};

export const NewsContainer = ({ place, itemsArray, status, limit }: NewsContainerProps) => {
  const clientWidth = document.documentElement.clientWidth;

  const items = itemsArray.map((item) => (
    <li key={item.id} className='news-container__news-list-item'>
      <NewsBlock {...item} />
    </li>
  ));

  const skeletons = [...new Array(limit)].map((_, index) => (
    <li key={index} className='news-container__news-list-item'>
      <NewsSkeleton />
    </li>
  ));

  const newsContainerListClassName = `news-container__news-list  ${
    place === 'news' ? 'news-container__news-list_place_news' : ''
  } ${clientWidth < 1280 ? 'news-container__news-list_gap_tablet' : ''}`;

  return (
    <section
      className={`news-container ${place === 'main' ? 'news-container_place_main' : ''} ${
        place === 'news' ? 'news-container_place_news' : ''
      }${place === 'aboutus' ? 'news-container_place_aboutus' : ''}`}
    >
      <ul className={newsContainerListClassName}>{status === 'loading' ? skeletons : items}</ul>
    </section>
  );
};
