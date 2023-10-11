import React from 'react';
import { CTALink } from '../CTALink';
import './NewsBlock.scss';

type NewsBlockProps = {
  imageUrl: string;
  createdAt: string;
  title: string;
  newsText: string;
};

export const NewsBlock: React.FC<NewsBlockProps> = ({ imageUrl, createdAt, title, newsText }) => {
  return (
    <div className='news-block'>
      <img src={imageUrl} alt='' className='news-block__image' />
      <span className='news-block__date'>{createdAt}</span>
      <h3 className='news-block__title'>{title}</h3>
      <p className='news-block__text'>{newsText}</p>
      <CTALink path='/news' />
    </div>
  );
};
