import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Title } from 'react-admin';

import './DashBoard.scss';

export const Dashboard = () => {
  return (
    <Card>
      <Title title='Главная' />
      <CardContent>
        <h1>Добро пожаловать в административную паннель сайта ИООО "Союз композиторов"</h1>
        <ul className='dashboard__nav-list'>
          <li>
            <Link to='/admin/news'>Новости</Link>
          </li>
          <li>
            <Link to='/admin/members'>Состав</Link>
          </li>
          <li>
            <Link to='/admin/projects'>Проекты</Link>
          </li>
          <li>
            <Link to='/admin/scores'>Ноты</Link>
          </li>
          <li>
            <Link to='/admin/audios'>Aудиозаписи</Link>
          </li>
          <li>
            <Link to='/admin/videos'>Видеозаписи</Link>
          </li>
          <li>
            <Link to='/admin/reports'>Отчёты</Link>
          </li>
          <li>
            <Link to='/admin/articles'>Статьи</Link>
          </li>
          <li>
            <Link to='/admin/ourHistory'>Наша история</Link>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
