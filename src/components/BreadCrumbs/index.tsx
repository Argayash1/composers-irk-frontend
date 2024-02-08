import React from 'react';

import { useLocation } from 'react-router-dom';

import './BreadCrumbs.scss';

import { useSelector } from 'react-redux';
import { selectNewsData } from '../../redux/news/selectors';
import { selectUnionMembersData } from '../../redux/unionMember/selectors';
import { selectProjectsData } from '../../redux/project/selectors';
import { selectVideoData } from '../../redux/video/selectors';
import { selectArticleData } from '../../redux/article/selectors';
import { Crumb } from '../Crumb';
import { crumbTexts } from '../../utils/crumbTexts';

export interface Item {
  _id: string;
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

export const BreadCrumbs = () => {
  const { item: newsItem } = useSelector(selectNewsData);
  const { item: unionMemberItem } = useSelector(selectUnionMembersData);
  const { item: projectItem } = useSelector(selectProjectsData);
  const { videoItem } = useSelector(selectVideoData);
  const { item: articleItem } = useSelector(selectArticleData);

  const { pathname } = useLocation();
  
  const pathnames = pathname.split('/').filter((pathname) => pathname);
  pathnames.unshift('/');

  const item: Item = pathname.includes('news')
    ? newsItem
    : pathname.includes('projects')
    ? projectItem
    : pathname.includes('unionmembers')
    ? unionMemberItem
    : pathname.includes('aboutus')
    ? articleItem
    : videoItem;

  const crumbs = pathnames.map((pathname, index) => (
    <li key={index}>
      <Crumb item={item} index={index} pathname={pathname} pathnames={pathnames} crumbTexts={crumbTexts} />
    </li>
  ));

  return <nav className='bread-crumbs'>{<ul className='bread-crumbs__list'>{crumbs}</ul>}</nav>;
};
