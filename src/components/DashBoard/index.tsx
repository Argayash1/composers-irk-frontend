import React from 'react';
import { Link } from 'react-router-dom';
import './DashBoard.scss';

export const Dashboard = () => {
  return (
    <main>
      <section>
        <h1>Добро пожаловать в админку сайта ИООО "Союз композиторов"</h1>
        <nav>
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
          </ul>
        </nav>
      </section>
    </main>
  );
};
