import React from 'react';
import ContentLoader from 'react-content-loader';
import './FullProjectSkeleton.scss';

export const FullProjectSkeleton = () => (
  <main className='full-project'>
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
      <rect x='0' y='90' rx='0' ry='0' width='1110' height='600' />
      <rect x='0' y='730' rx='0' ry='0' width='855' height='168' />
      <rect x='0' y='958' rx='6' ry='6' width='255' height='50' />
    </ContentLoader>
  </main>
);
