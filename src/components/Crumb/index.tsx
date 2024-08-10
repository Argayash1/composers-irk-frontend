import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from '../BreadCrumbs';
import { CrumbTexts } from '../../utils/crumbTexts';

import './Crumb.scss';

type CrumbTextProps = {
  item: Item;
  index: number;
  pathnames: string[];
  crumbTexts: CrumbTexts;
  pathname: string;
};

export const Crumb = ({ item, index, pathnames, crumbTexts, pathname }: CrumbTextProps) => {
  const crumbElement = (
    <>
      <Link className='crumb__link' to={`${pathnames.slice(0, index + 1).join('')}`}>
        {crumbTexts[pathname]}
      </Link>
      <span className='crumb__span'>|</span>
    </>
  );

  const lastCrumbEelement =
    pathnames.length === 3 ? item.title || `${item.surname} ${item.name} ${item.patronymic}` : crumbTexts[pathname];

  return <div className='crumb'>{index === pathnames.length - 1 ? lastCrumbEelement : crumbElement}</div>;
};
