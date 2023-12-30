import React from 'react';
import ContentLoader from 'react-content-loader';

export const NewsSkeleton = () => {
  const screenWidth = window.screen.width;

  return (
    <ContentLoader
      speed={2}
      width={350}
      height={481}
      viewBox='0 0 350 481'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='-5' y='-19' rx='3' ry='3' width='67' height='11' />
      <rect x='0' y='225' rx='0' ry='0' width='70' height='18' />
      <rect x='0' y='0' rx='0' ry='0' width='350' height='205' />
      <rect x='0' y='258' rx='0' ry='0' width='350' height='54' />
      <rect x='0' y='322' rx='0' ry='0' width='350' height='69' />
      <rect x='0' y='431' rx='0' ry='0' width='190' height='50' />
    </ContentLoader>
  );
};
