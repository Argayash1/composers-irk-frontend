import React from 'react';
import ContentLoader from 'react-content-loader';
import './NewsSkeleton.scss';

type NewsSkeletonProps = {
  screenWidth: number;
};

export const NewsSkeleton = ({ screenWidth }: NewsSkeletonProps) => {
  const dateY = screenWidth > 1169 ? 225 : screenWidth <= 1169 && screenWidth > 767 ? 133 : 173.143;

  const titleY = screenWidth > 1169 ? 258 : screenWidth <= 1169 && screenWidth > 767 ? 159 : 199;

  const textY = screenWidth > 1169 ? 322 : screenWidth <= 1169 && screenWidth > 767 ? 198 : 251;

  const buttonY = screenWidth > 1169 ? 431 : screenWidth <= 1169 && screenWidth > 767 ? 278 : 329;

  const viewBox =
    screenWidth > 1169 ? '0 0 350 481' : screenWidth <= 1169 && screenWidth > 767 ? '0 0 216 314' : '0 0 270 374';

  return (
    <ContentLoader
      className='news-skeleton'
      speed={2}
      width={350}
      height={481}
      viewBox={viewBox}
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='0' ry='0' className='news-skeleton__image' />
      <rect x='0' y={dateY} rx='0' ry='0' className='news-skeleton__date' />
      <rect x='0' y={titleY} rx='0' ry='0' className='news-skeleton__title' />
      <rect x='0' y={textY} rx='0' ry='0' className='news-skeleton__text' />
      <rect x='0' y={buttonY} rx='6' ry='6' className='news-skeleton__button' />
    </ContentLoader>
  );
};
