import React from 'react';
import './MainMenu.scss';
import { NavLink } from 'react-router-dom';
import { CloseButton } from '../CloseButton';
export const menuItems = [
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

type MainMenuProps = {
  place: string;
  isOpen?: boolean;
  onClose?: () => void;
};

export const MainMenu = ({ place, isOpen, onClose }: MainMenuProps) => {
  const handleCloseBurgerMenu = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <nav
      className={`main-menu ${place === 'header' ? 'main-menu_place_header' : ''} ${
        place === 'burger' ? 'main-menu_place_burger' : ''
      } ${isOpen ? 'main-menu_is_opened' : ''}`}
    >
      {place === 'burger' && <CloseButton onClick={handleCloseBurgerMenu} place='burger' />}
      <ul className={`main-menu__list ${place === 'burger' ? 'main-menu__list_place_burger' : ''}`}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) =>
                `main-menu__list-link ${isActive ? 'main-menu__list-link_active' : ''} ${
                  place === 'burger' ? 'main-menu__list-link_place_burger' : ''
                }`
              }
              to={item.path}
              onClick={handleCloseBurgerMenu}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
