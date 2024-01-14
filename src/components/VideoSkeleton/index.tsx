import React from 'react';
import ContentLoader from 'react-content-loader';
import './VideoSkeleton.scss';

type VideoSkeletonProps = {
  screenWidth: number;
};

export const VideoSkeleton = ({ screenWidth }: VideoSkeletonProps) => {
  const titleY = screenWidth > 891 ? 333 : screenWidth <= 891 && screenWidth > 482 ? 203 : 177;
  const professionY = screenWidth > 891 ? 392 : screenWidth <= 891 && screenWidth > 482 ? 247 : 223;
  const viewBox =
    screenWidth > 891 ? '0 0 541 413' : screenWidth <= 891 && screenWidth > 482 ? '0 0 335,8 263' : '0 0 290 240';

  return (
    <ContentLoader
      className='video-skeleton'
      speed={2}
      width={541}
      height={413}
      viewBox={viewBox}
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='0' ry='0' width='541' height='303' className='video-skeleton__iframe' />
      <rect x='0' y={titleY} rx='0' ry='0' width='255' height='44' className='video-skeleton__title' />
      <rect x='0' y={professionY} rx='0' ry='0' width='255' height='46' className='video-skeleton__profession' />
    </ContentLoader>
  );
};
