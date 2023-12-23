import React from 'react';
import './Heading.scss';

type HeadingProps = {
  level: number;
  text: string;
};

export const Heading = ({ level, text }: HeadingProps) => {
  const headingLevelMapping: Record<number, JSX.Element> = {
    2: <h2 className='heading'>{text}</h2>,
    3: <h3 className='heading heading_level_3'>{text}</h3>,
    4: <h4 className='heading heading_level_4'>{text}</h4>,
  };

  const selectedLevel = level > 4 ? 4 : level < 2 ? 2 : level;
  return headingLevelMapping[selectedLevel];
};
