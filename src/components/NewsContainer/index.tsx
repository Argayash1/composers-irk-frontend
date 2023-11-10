import React from 'react';
import { NewsBlock } from '../../components';
import './NewsContainer.scss';
import { articlesArray } from '../../utils/articlesArray';
import { News } from '../../redux/news/types';

type NewsContainerProps = {
  place?: string;
  itemsArray?: News[];
};

export const NewsContainer: React.FC<NewsContainerProps> = ({ place, itemsArray }) => {
  const slicedNewsArray = itemsArray && itemsArray.slice(0, 6);
  const screenWidth = document.documentElement.clientWidth;

  const slicedNews =
    slicedNewsArray &&
    slicedNewsArray.map((news, index) => (
      <li key={index}>
        <NewsBlock {...news} />
      </li>
    ));

  const news =
    itemsArray &&
    itemsArray.map((news, index) => (
      <li key={index}>
        <NewsBlock {...news} />
      </li>
    ));

  const articles = articlesArray.map((article, index) => (
    <li key={index}>
      <NewsBlock index={index} {...article} />
    </li>
  ));

  const newsContainerListClassName = `news-container__news-list  ${
    screenWidth < 1280 ? 'news-container__news-list_gap_tablet' : ''
  }`;

  return (
    <section
      className={`news-container ${place === 'news' ? 'news-container_place_news' : ''}${
        place === 'aboutus' ? 'news-container_place_aboutus' : ''
      }`}
    >
      <ul className={newsContainerListClassName}>
        {place === 'news' ? news : place === 'aboutus' ? articles : slicedNews}
      </ul>
    </section>
  );
};
