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

export const NewsBlock: React.FC<NewsBlockProps> = ({
  id,
  imageUrl,
  createdAt,
  title,
  newsText,
  articleDescription,
  index,
}) => {
  const fullNewsPath = `/news/${id}`;
  const fullArticlePath = `/aboutus/${index}`;

  return (
    <div className='news-block'>
      <Link to={articleDescription ? fullArticlePath : fullNewsPath} onClick={handleScrollToTop}>
        <img src={imageUrl} alt='' className='news-block__image' />
      </Link>
      <span className='news-block__date'>{createdAt}</span>
      <h3 className='news-block__title'>{title}</h3>
      <p className='news-block__text'>{articleDescription ? articleDescription : newsText}</p>
      <CTA path={articleDescription ? fullArticlePath : fullNewsPath} />
    </div>
  );
};
