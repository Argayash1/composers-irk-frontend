import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BreadCrumbs.scss';
import { newsArray } from '../../utils/newsArray';
import { projectArray } from '../../utils/projectsArray';
import { membersArray } from '../../utils/membersArray';

export const BreadCrumbs: React.FC = () => {
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
    imageUrl: string;
    title?: string;
    name?: string;
    profession?: string;
    biography?: string;
    description?: string;
    newsText?: string;
  };

  const crumbTexts: CrumbTexts = {
    news: 'Новости',
    unionmembers: 'Состав',
    projects: 'Проекты',
    scores: 'Ноты',
    media: 'Медиа',
    aboutus: 'Про нас',
    reports: 'Отчёты',
    contacts: 'Контакты',
  };

  const itemsArray: Item[] = pathname.includes('news')
    ? newsArray
    : pathname.includes('projects')
    ? projectArray
    : membersArray;

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
              <li className='bread-crumbs__list-item bread-crumbs__list-item_margin-top_big' key={index}>
                {pathnames.length === 2
                  ? itemsArray[Number(pathname)].title || itemsArray[Number(pathname)].name
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
