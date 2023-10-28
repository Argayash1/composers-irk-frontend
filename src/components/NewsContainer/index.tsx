import React from 'react';
import { NewsBlock } from '../../components';
import { newsArray } from '../../utils/newsArray';
import './NewsContainer.scss';
import { articlesArray } from '../../utils/articlesArray';

type NewsContainerProps = {
  place?: string;
};

export const NewsContainer: React.FC<NewsContainerProps> = ({ place }) => {
  const slicedNewsArray = newsArray.slice(0, 6);

  const slicedNews = slicedNewsArray.map((news, index) => (
    <li key={index}>
      <NewsBlock index={index} {...news} />
    </li>
  ));

  const news = newsArray.map((news, index) => (
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
