import React from 'react';
import { CTA } from '../CTA';
import './NewsBlock.scss';
import { Link } from 'react-router-dom';
import { handleScrollToTop } from '../../utils/utils';

type NewsBlockProps = {
  id: string;
  imageUrl: string;
  createdAt: string;
  title: string;
  newsText?: string;
  articleDescription?: string;
  index?: number;
};

export const NewsBlock = ({ id, imageUrl, createdAt, title, newsText, articleDescription, index }: NewsBlockProps) => {
  const fullNewsPath = `/news/${id}`;
  const fullArticlePath = `/aboutus/${id}`;

  return (
    <div className='news-block'>
      <Link
        to={articleDescription ? fullArticlePath : fullNewsPath}
        className='news-block__link'
        onClick={handleScrollToTop}
      >
        <img src={imageUrl} alt='' className='news-block__image' />
      </Link>
      <span className='news-block__date'>{createdAt}</span>
      <h3 className='news-block__title'>{title}</h3>
      <p className='news-block__text'>{articleDescription ? articleDescription : newsText}</p>
      <CTA path={articleDescription ? fullArticlePath : fullNewsPath} />
    </div>
  );
};
