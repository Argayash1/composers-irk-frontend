import React from 'react';
import ContentLoader from 'react-content-loader';

export const NewsSkeleton = () => {
  const screenWidth = window.screen.width;

  const cardWidth = screenWidth > 1169 ? 350 : screenWidth <= 1169 && screenWidth > 767 ? 216 : 270;
  const imageHeight = screenWidth > 1169 ? 205 : screenWidth <= 1169 && screenWidth > 767 ? 123 : 158.143;

  const dateHeight = screenWidth > 1169 ? 18 : 16;
  const dateWidth = screenWidth > 1169 ? 70 : 60;

  const titleHeight = screenWidth > 1169 ? 54 : screenWidth <= 1169 && screenWidth > 767 ? 35 : 42;

  const textHeight = screenWidth > 1169 ? 69 : screenWidth <= 1169 && screenWidth > 767 ? 62 : 53.229;

  const buttonwidth = screenWidth > 1169 ? 190 : screenWidth <= 1169 && screenWidth > 767 ? 216 : 270;
  const buttonHeight = screenWidth > 1169 ? 50 : screenWidth <= 1169 && screenWidth > 767 ? 34 : 45;

  const dateY = screenWidth > 1169 ? 225 : screenWidth <= 1169 && screenWidth > 767 ? 226 : 173.143;

  const titleY = screenWidth > 1169 ? 258 : screenWidth <= 1169 && screenWidth > 767 ? 252 : 199;

  const textY = screenWidth > 1169 ? 322 : screenWidth <= 1169 && screenWidth > 767 ? 199 : 251.143;

  const buttonY = screenWidth > 1169 ? 431 : screenWidth <= 1169 && screenWidth > 767 ? 337 : 287.23;

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
      <rect x='0' y={dateY} rx='0' ry='0' width={dateWidth} height={dateHeight} />
      <rect x='0' y='0' rx='0' ry='0' width={cardWidth} height={imageHeight} />
      <rect x='0' y={titleY} rx='0' ry='0' width={cardWidth} height={titleHeight} />
      <rect x='0' y={textY} rx='0' ry='0' width={cardWidth} height={textHeight} />
      <rect x='0' y={buttonY} rx='0' ry='0' width={buttonwidth} height={buttonHeight} />
    </ContentLoader>
  );
};
