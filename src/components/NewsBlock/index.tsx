import React from 'react';
import { CTA } from '../CTA';
import './NewsBlock.scss';
import { Link } from 'react-router-dom';
import { handleFormateDate, handleScrollToTop } from '../../utils/utils';

type NewsBlockProps = {
  _id: string;
  imageUrl: string;
  createdAt: string;
  title: string;
  newsText?: string;
  articleDescription?: string;
};

export const NewsBlock = ({ _id, imageUrl, createdAt, title, newsText, articleDescription }: NewsBlockProps) => {
  const fullNewsPath = `/news/${_id}`;
  const fullArticlePath = `/aboutus/${_id}`;

  return (
    <div className='news-block'>
      <Link
        to={articleDescription ? fullArticlePath : fullNewsPath}
        className='news-block__link'
        onClick={handleScrollToTop}
      >
        <img src={imageUrl} alt='' className='news-block__image' />
      </Link>
      <span className='news-block__date'>{handleFormateDate(createdAt)}</span>
      <h3 className='news-block__title'>{title}</h3>
      <p className='news-block__text'>{articleDescription ? articleDescription : newsText}</p>
      <CTA path={articleDescription ? fullArticlePath : fullNewsPath} />
    </div>
  );
};
