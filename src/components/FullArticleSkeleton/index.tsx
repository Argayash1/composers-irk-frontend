import React from 'react';
import ContentLoader from 'react-content-loader';
import './FullArticleSkeleton.scss';

export const FullArticleSkeleton = () => (
  <main className='full-article'>
    <ContentLoader
      speed={2}
      width={1110}
      height={1135}
      viewBox='0 0 1110 1135'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='0' ry='0' width='100%' height='40' />
      <rect x='0' y='90' rx='0' ry='0' width='585' height='445' />
      <rect x='635' y='90' rx='0' ry='0' width='475' height='270' />
      <rect x='0' y='585' rx='0' ry='0' width='950' height='1501' />
    </ContentLoader>
  </main>
);
