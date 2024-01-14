import React from 'react';
import ContentLoader from 'react-content-loader';

type ProjectSkeletonProps = {
  screenWidth: number;
};

export const ProjectSkeleton = ({ screenWidth }: ProjectSkeletonProps) => (
  <ContentLoader
    speed={2}
    width={1108}
    height={268}
    viewBox='0 0 1108 268'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='0' y='0' rx='0' ry='0' width='540' height='268' />
    <rect x='635' y='0' rx='0' ry='0' width='473' height='51' />
    <rect x='635' y='71' rx='0' ry='0' width='473' height='90' />
    <rect x='635' y='211' rx='6' ry='6' width='190' height='50' />
  </ContentLoader>
);
