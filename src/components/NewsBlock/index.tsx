import React from 'react';
import { CTA } from '../CTA';
import './NewsBlock.scss';
import { Link } from 'react-router-dom';
import { handleScrollToTop } from '../../utils/utils';

type NewsBlockProps = {
  imageUrl: string;
  createdAt: string;
  title: string;
  newsText: string;
  index: number;
};

export const NewsBlock: React.FC<NewsBlockProps> = ({ imageUrl, createdAt, title, newsText, index }) => {
  return (
    <div className='news-block'>
      <Link to={`/news/${index}`} onClick={handleScrollToTop}>
        <img src={imageUrl} alt='' className='news-block__image' />
      </Link>
      <span className='news-block__date'>{createdAt}</span>
      <h3 className='news-block__title'>{title}</h3>
      <p className='news-block__text'>{newsText}</p>
      <CTA path={`/news/${index}`} />
    </div>
  );
};
