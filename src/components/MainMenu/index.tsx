import React from 'react';
import './MainMenu.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CloseButton } from '../CloseButton';
import { menuItems } from '../../utils/constants';
import { useTitle } from '../../hooks/useTitle';

type MainMenuProps = {
  place: string;
  isOpen?: boolean;
  onClose?: () => void;
};

export const MainMenu = ({ place, isOpen, onClose }: MainMenuProps) => {
  const { pathname } = useLocation();

  const pageTitle = menuItems.find((menuItem) => menuItem.path === pathname)?.name;

  const [setTitle] = useTitle(pageTitle ? pageTitle : 'ИООО "Союз композиторов"'); // присваиваем название страницы с помощью useLocation, т.к. иначе при рефреше название сбрасывается

  const handleCloseBurgerMenu = (pageTitle?: string) => {
    pageTitle && setTitle(pageTitle);

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
      {place === 'burger' && (
        <Link to='/search' className='main-menu__search-link' onClick={() => handleCloseBurgerMenu('Поиск')}>
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
            <path
              d='M10 10L14 14M6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333Z'
              stroke='#303A3D'
              strokeWidth='1.68421'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span>Поиск</span>
        </Link>
      )}
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
              onClick={() => handleCloseBurgerMenu(item.name)}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
