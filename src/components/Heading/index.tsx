import React from 'react';

type HeadingProps = {
  level: number;
  text: string;
};

export const Heading: React.FC<HeadingProps> = ({ level, text }) => {
  const headingLevelMapping: Record<number, JSX.Element> = {
    2: <h2>{text}</h2>,
    3: <h3>{text}</h3>,
    4: <h4>{text}</h4>,
  };

  const selectedLevel = level > 4 ? 4 : level < 2 ? 2 : level;
  return headingLevelMapping[selectedLevel];
};
