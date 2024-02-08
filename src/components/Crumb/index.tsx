import React from 'react';
import { Link } from 'react-router-dom';
import { CrumbTexts, Item } from '../BreadCrumbs';
import './Crumb.scss';

type CrumbTextProps = {
  item: Item;
  index: number;
  pathnames: string[];
  crumbTexts: CrumbTexts;
  pathname: string;
};

export const Crumb = ({ item, index, pathnames, crumbTexts, pathname }: CrumbTextProps) => {
  return (
    <>
      {index === pathnames.length - 1 ? (
        <li className='crumb' key={index}>
          {pathnames.length === 3
            ? item.title || `${item.surname} ${item.name} ${item.patronymic}`
            : crumbTexts[pathname]}
        </li>
      ) : (
        <li className='crumb' key={index}>
          <Link className='crumb__link' to={`${pathnames.slice(0, index + 1).join('')}`}>
            {crumbTexts[pathname]}
          </Link>
          <span className='crumb__span'>|</span>
        </li>
      )}
    </>
  );
};
