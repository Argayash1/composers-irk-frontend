import React from 'react';
import ContentLoader from 'react-content-loader';
import './FullUnionMemberSkeleton.scss';

export const FullUnionMemberSkeleton = () => (
  <main className='full-union-member'>
    <ContentLoader
      speed={2}
      width={1110}
      height={1135}
      viewBox='0 0 1110 1135'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='0' ry='0' width='100%' height='40' />
      <rect x='0' y='90' rx='0' ry='0' width='445' height='445' />
      <rect x='540' y='90' rx='0' ry='0' width='505' height='266' />
      <rect x='540' y='396' rx='0' ry='0' width='255' height='50' />
      <rect x='0' y='580' rx='5' ry='5' width='100%' height='50' />
      <rect x='0' y='670' rx='0' ry='0' width='855' height='345' />
    </ContentLoader>
  </main>
);
