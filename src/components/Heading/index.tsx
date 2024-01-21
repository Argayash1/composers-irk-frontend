import React from 'react';
import './Heading.scss';
import clsx from 'clsx';

type HeadingProps = {
  level: number;
  text: string;
  place?: string;
};

export const Heading = ({ level, text, place }: HeadingProps) => {
  const headingLevelMapping: Record<number, JSX.Element> = {
    2: <h2 className={clsx('heading', place === 'about-us' && 'heading_type_our-history')}>{text}</h2>,
    3: <h3 className={clsx('heading', 'heading_level_3', place === 'about-us' && 'heading_type_about-us')}>{text}</h3>,
    4: <h4 className='heading heading_level_4'>{text}</h4>,
  };

  const selectedLevel = level > 4 ? 4 : level < 2 ? 2 : level;
  return headingLevelMapping[selectedLevel];
};
