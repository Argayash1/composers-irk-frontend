import React from 'react';
import { Heading } from '../Heading';
import './TextContent.scss';

type TextContentProps = {
  textArray: string[];
};

export const TextContent: React.FC<TextContentProps> = ({ textArray }) => {
  return (
    <ul className='text-content'>
      {textArray.map((item, index) => {
        if (item.startsWith('#')) {
          const matchResult = item ? item.match(/^(#+)\s/) : null;
          const level = matchResult ? matchResult[1].length : 0;
          const headerText = item.replace(/^(#+)\s/, '');
          return (
            <li key={index}>
              <Heading level={level} text={headerText} />
            </li>
          );
        } else {
          const isInterviewerQuestion = item.startsWith('< ');
          const paragraphtext = isInterviewerQuestion ? item.replace('< ', '') : item;
          return (
            <li key={index}>
              <p
                className={`text-content__paragraph ${
                  isInterviewerQuestion ? 'text-content__paragraph_font_bold' : ''
                }`}
              >
                {paragraphtext}
              </p>
            </li>
          );
        }
      })}
    </ul>
  );
};
