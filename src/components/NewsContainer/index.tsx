import React from 'react';
import { CTA, NewsBlock } from '../../components';
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
  return (
    <section className='news-container'>
      <div
        className={`news-container__title-container ${
          place === 'aboutus' ? 'news-container__title-container_place_aboutus' : ''
        }`}
      >
        {place !== 'aboutus' && <h2 className='news-container__title'>Новости</h2>}
        {place !== 'news' && place !== 'aboutus' && <CTA linkText='Все новости' path='/news' borderColor='grey' />}
      </div>
      <ul
        className={`news-container__news-list ${place === 'aboutus' ? 'news-container__news-list_place_aboutus' : ''}`}
      >
        {place === 'news' ? news : place === 'aboutus' ? articles : slicedNews}
      </ul>
    </section>
  );
};
