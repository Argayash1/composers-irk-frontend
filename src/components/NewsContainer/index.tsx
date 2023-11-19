import React from 'react';
import { NewsBlock } from '../../components';
import './NewsContainer.scss';
import { articlesArray } from '../../utils/articlesArray';
import { News } from '../../redux/news/types';
import { useSelector } from 'react-redux';
import { selectCurrentPage } from '../../redux/searchSlice/selectors';

type NewsContainerProps = {
  place?: string;
  itemsArray?: News[];
};

export const NewsContainer: React.FC<NewsContainerProps> = ({ place, itemsArray }) => {
  const slicedNewsArray = itemsArray && itemsArray.slice(0, 6);
  const screenWidth = document.documentElement.clientWidth;
  const currentPage = useSelector(selectCurrentPage);
  const firstItem = currentPage * 6 - 6;
  const lastItam = currentPage * 6;

  const slicedNews =
    slicedNewsArray &&
    slicedNewsArray.map((news) => (
      <li key={news.id}>
        <NewsBlock {...news} />
      </li>
    ));

  const news =
    itemsArray &&
    itemsArray.map((news) => (
      <li key={news.id}>
        <NewsBlock {...news} />
      </li>
    ));

  const articles = articlesArray.slice(firstItem, lastItam).map((article) => (
    <li key={article.id}>
      <NewsBlock {...article} />
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
