import React from 'react';
import './MainMenu.scss';
import { NavLink } from 'react-router-dom';
const menuItems = [
  { name: 'Главная', path: '/' },
  { name: 'Новости', path: '/news' },
  { name: 'Состав', path: '/unionmembers' },
  { name: 'Проекты', path: '/projects' },
  { name: 'Ноты', path: '/scores' },
  { name: 'Медиа', path: '/media' },
  { name: 'Отчёты', path: '/reports' },
  { name: 'Про нас', path: '/aboutus' },
  { name: 'Контакты', path: '/contacts' },
];

export const MainMenu: React.FC = () => {
  return (
    <nav className='main-menu'>
      <ul className='main-menu__list'>
        {menuItems.map((item) => (
          <li>
            <NavLink
              className={({ isActive }) => `main-menu__list-link ${isActive ? 'main-menu__list-link_active' : ''}`}
              to={item.path}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
