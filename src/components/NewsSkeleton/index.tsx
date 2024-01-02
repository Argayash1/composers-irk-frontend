import React from 'react';
import ContentLoader from 'react-content-loader';
import './NewsSkeleton.scss';

export const NewsSkeleton = () => {
  const screenWidth = window.screen.width;

  const dateY = screenWidth > 1169 ? 225 : screenWidth <= 1169 && screenWidth > 767 ? 133 : 173.143;

  const titleY = screenWidth > 1169 ? 258 : screenWidth <= 1169 && screenWidth > 767 ? 0 : 199;

  const textY = screenWidth > 1169 ? 322 : screenWidth <= 1169 && screenWidth > 767 ? 198 : 251;

  const buttonX = screenWidth > 1169 ? 80 : 0;
  const buttonY = screenWidth > 1169 ? 431 : screenWidth <= 1169 && screenWidth > 767 ? 278 : 287;

  return (
    <ContentLoader
      className='news-skeleton'
      speed={2}
      width={350}
      height={481}
      viewBox='0 0 350 481'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='0' ry='0' className='news-skeleton__image' />
      <rect x='0' y={dateY} rx='0' ry='0' className='news-skeleton__date' />
      <rect x='0' y={titleY} rx='0' ry='0' className='news-skeleton__title' />
      <rect x='0' y={textY} rx='0' ry='0' className='news-skeleton__text' />
      <rect x={buttonX} y={buttonY} rx='0' ry='0' className='news-skeleton__button' />
    </ContentLoader>
  );
};
