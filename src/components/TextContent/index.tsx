import React from 'react';
import { Heading } from '../Heading';
import './TextContent.scss';

type TextContentProps = {
  textArray: string[];
  place?: string;
};

export const TextContent = ({ textArray, place }: TextContentProps) => {
  return (
    <ul
      className={`text-content ${place === 'full-union-member' ? 'text-content_place_full-union-member' : ''} ${
        place === 'about-us' ? 'text-content_place_about-us' : ''
      }`}
    >
      {textArray.map((item, index) => {
        if (item.startsWith('#')) {
          const matchResult = item ? item.match(/^(#+)\s/) : null;
          const level = matchResult ? matchResult[1].length : 0;
          const headerText = item.replace(/^(#+)\s/, '');

          return (
            <li key={index} className='text-content__item'>
              <Heading level={level} text={headerText} />
            </li>
          );
        } else {
          const isInterviewerQuestion = item.startsWith('< ');
          const paragraphtext = isInterviewerQuestion ? item.replace('< ', '') : item;

          return (
            <li key={index} className='text-content__item'>
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
