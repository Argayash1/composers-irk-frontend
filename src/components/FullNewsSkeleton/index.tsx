import React from 'react';
import ContentLoader from 'react-content-loader';
import './FullNewsSkeleton.scss';

export const FullNewsSkeleton = () => (
  <main className='full-news'>
    <ContentLoader
      className='full-news-skeleton'
      speed={2}
      width={1110}
      height={1052}
      viewBox='0 0 1110 1052'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='0' ry='0' width='572' height='40' />
      <rect x='0' y='70' rx='0' ry='0' width='108' height='24' />
      <rect x='0' y='134' rx='0' ry='0' width='1110' height='600' />
      <rect x='0' y='774' rx='0' ry='0' width='855' height='168' />
      <rect x='4' y='1002' rx='6' ry='6' width='255' height='50' />
    </ContentLoader>
  </main>
);
