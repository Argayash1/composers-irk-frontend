import React from 'react';
import ContentLoader from 'react-content-loader';
import './FullVideoSkeleton.scss';

export const FullVideoSkeleton = () => (
  <main className='full-video'>
    <ContentLoader
      className='full-news-skeleton'
      speed={2}
      width={1110}
      height={1052}
      viewBox='0 0 1110 1052'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='0' ry='0' width='100%' height='40' />
      <rect x='0' y='90' rx='0' ry='0' width='100%' height='622.8' />
      <rect x='0' y='752.8' rx='0' ry='0' width='100%' height='29' />
      <rect x='0' y='801.8' rx='0' ry='0' width='100%' height='24' />
      <rect x='0' y='850.8' rx='0' ry='0' width='100%' height='21' />
    </ContentLoader>
  </main>
);
