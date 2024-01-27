import React from 'react';
import ContentLoader from 'react-content-loader';
import './ReportSkeleton.scss';

type ReportSkeletonProps = {
  screenWidth: number;
};

export const ReportSkeleton = ({ screenWidth }: ReportSkeletonProps) => {
  const viewBox =
    screenWidth > 1164 ? '0 0 826 1167' : screenWidth <= 1164 && screenWidth > 670 ? '0 0 592 837' : '0 0 290 410';

  return (
    <ContentLoader
      className='report-skeleton'
      speed={2}
      width={826}
      height={1167}
      viewBox={viewBox}
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='0' ry='0' width='826' height='1167' />
    </ContentLoader>
  );
};
