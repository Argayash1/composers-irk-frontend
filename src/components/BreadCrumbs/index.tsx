import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import './BreadCrumbs.scss';

import { menuItems } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { selectNewsData } from '../../redux/news/selectors';
import { selectUnionMembersData } from '../../redux/unionMember/selectors';
import { selectProjectsData } from '../../redux/project/selectors';
import { selectVideoData } from '../../redux/video/selectors';
import { selectArticleData } from '../../redux/article/selectors';

export const BreadCrumbs = () => {
  const { item: newsItem } = useSelector(selectNewsData);
  const { item: unionMemberItem } = useSelector(selectUnionMembersData);
  const { item: projectItem } = useSelector(selectProjectsData);
  const { videoItem } = useSelector(selectVideoData);
  const { item: articleItem } = useSelector(selectArticleData);

  const { pathname } = useLocation();
  const pathnames = pathname.split('/').filter((pathname) => pathname);

  interface CrumbTexts {
    [key: string]: string;
  }

  interface Item {
    _id?: string;
    imageUrl?: string;
    title?: string;
    name?: string;
    surname?: string;
    patronymic?: string;
    profession?: string;
    biography?: string;
    description?: string;
    newsText?: string;
  }

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

  const item: Item = pathname.includes('news')
    ? newsItem
    : pathname.includes('projects')
    ? projectItem
    : pathname.includes('unionmembers')
    ? unionMemberItem
    : pathname.includes('aboutus')
    ? articleItem
    : videoItem;

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
                  ? item.title || `${item.surname} ${item.name} ${item.patronymic}`
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
