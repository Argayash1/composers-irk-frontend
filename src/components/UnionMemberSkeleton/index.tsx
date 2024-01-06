import React from 'react';
import ContentLoader from 'react-content-loader';
import './UnionMemberSkeleton.scss';

type UnionMemberSkeletonProps = {
  screenWidth: number;
};

export const UnionMemberSkeleton = ({ screenWidth }: UnionMemberSkeletonProps) => {
  const nameY = screenWidth > 891 ? 270 : screenWidth <= 891 && screenWidth > 482 ? 232 : 142;
  const professionY = screenWidth > 891 ? 324 : screenWidth <= 891 && screenWidth > 482 ? 279 : 181;
  const viewBox =
    screenWidth > 891 ? '0 0 255 370' : screenWidth <= 891 && screenWidth > 482 ? '0 0 217 316' : '0 0 137 210';

  return (
    <ContentLoader
      className='union-member-skeleton'
      speed={2}
      width={255}
      height={370}
      viewBox={viewBox}
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='0' ry='0' width='255' height='255' className='union-member-skeleton__image' />
      <rect x='0' y={nameY} rx='0' ry='0' width='255' height='44' className='union-member-skeleton__name' />
      <rect x='0' y={professionY} rx='0' ry='0' width='255' height='46' className='union-member-skeleton__profession' />
    </ContentLoader>
  );
};
