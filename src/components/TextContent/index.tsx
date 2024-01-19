import React from 'react';
import { Heading } from '../Heading';
import './TextContent.scss';
import clsx from 'clsx';

type TextContentProps = {
  textArray: string[];
  place?: string;
};

export const TextContent = ({ textArray, place }: TextContentProps) => {
  const textContentClass = clsx(
    'text-content',
    place === 'full-union-member' && 'text-content_place_full-union-member',
    place === 'full-project' && 'text-content_place_full-project',
    place === 'about-us' && 'text-content_place_about-us',
    place === 'full-article' && 'text-content_place_full-article',
  );

  return (
    <ul className={textContentClass}>
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
          const textContentParagraphClass = clsx(
            'text-content__paragraph',
            isInterviewerQuestion && 'text-content__paragraph_font_bold',
            place === 'full-project' && 'text-content__paragraph_place_full-project',
          );

          return (
            <li key={index} className='text-content__item'>
              <p className={textContentParagraphClass}>{paragraphtext}</p>
            </li>
          );
        }
      })}
    </ul>
  );
};
