import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import './BreadCrumbs.scss';

import { newsArray } from '../../utils/newsArray';
import { projectsArray } from '../../utils/projectsArray';
import { unionMembersArray } from '../../utils/membersArray';
import { iFramesArray } from '../../utils/iframesArray';
import { articlesArray } from '../../utils/articlesArray';
import { menuItems } from '../MainMenu';

export const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split('/').filter((pathname) => pathname);

  interface CrumbTexts {
    [key: string]: string;
    news: string;
    unionmembers: string;
    projects: string;
    scores: string;
    media: string;
    aboutus: string;
    reports: string;
    contacts: string;
  }

  type Item = {
    id?: string;
    imageUrl?: string;
    title?: string;
    name?: string;
    surname?: string;
    profession?: string;
    biography?: string[];
    description?: string;
    newsText?: string;
  };

  const crumbTexts: CrumbTexts = {
    news: menuItems[1].name,
    unionmembers: menuItems[2].name,
    projects: menuItems[3].name,
    scores: menuItems[4].name,
    media: menuItems[5].name,
    reports: menuItems[6].name,
    aboutus: menuItems[7].name,
    contacts: menuItems[8].name,
  };

  const itemsArray: Item[] = pathname.includes('news')
    ? newsArray
    : pathname.includes('projects')
    ? projectsArray
    : pathname.includes('unionmembers')
    ? unionMembersArray
    : pathname.includes('aboutus')
    ? articlesArray
    : iFramesArray;

  return (
    <nav className='bread-crumbs'>
      {pathnames.length > 0 && (
        <ul className='bread-crumbs__list'>
          <li className='bread-crumbs__list-item'>
            <Link className='bread-crumbs__list-item_link' to='/'>
              Главная
            </Link>
            <span className='bread-crumbs__span'>|</span>
          </li>
          {pathnames.map((pathname, index) =>
            index === pathnames.length - 1 ? (
              <li className='bread-crumbs__list-item' key={index}>
                {pathnames.length === 2
                  ? itemsArray[Number(pathname)].title ||
                    `${itemsArray[Number(pathname)].surname} ${itemsArray[Number(pathname)].name}`
                  : crumbTexts[pathname]}
              </li>
            ) : (
              <li className='bread-crumbs__list-item' key={index}>
                <Link className='bread-crumbs__list-item_link' to={`/${pathnames.slice(0, index + 1).join('/')}`}>
                  {crumbTexts[pathname]}
                </Link>
                <span className='bread-crumbs__span'>|</span>
              </li>
            ),
          )}
        </ul>
      )}
    </nav>
  );
};
