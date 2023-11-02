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

  const slicedNews =
    slicedNewsArray &&
    slicedNewsArray.map((news, index) => (
      <li key={index}>
        <NewsBlock index={index} {...news} />
      </li>
    ));

  const news =
    itemsArray &&
    itemsArray.map((news, index) => (
      <li key={index}>
        <NewsBlock index={index} {...news} />
      </li>
    ));

  const articles = articlesArray.map((article, index) => (
    <li key={index}>
      <NewsBlock index={index} {...article} />
    </li>
  ));

  const newsContainerListClassName = `news-container__news-list ${
    place === 'news' ? 'news-container__news-list_place_news' : ''
  }${place === 'aboutus' ? 'news-container__news-list_place_aboutus' : ''} `;

  return (
    <section className='news-container'>
      <ul className={newsContainerListClassName}>
        {place === 'news' ? news : place === 'aboutus' ? articles : slicedNews}
      </ul>
    </section>
  );
};
