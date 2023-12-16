import React from 'react';
import './Footer.scss';
import { Logo, ContactsList } from '../../components';
import { Link } from 'react-router-dom';
import { menuItems } from '../MainMenu';
import { handleScrollToTop } from '../../utils/utils';

const footerMenuItems = [
  menuItems[0],
  menuItems[3],
  menuItems[6],
  menuItems[1],
  menuItems[4],
  menuItems[7],
  menuItems[2],
  menuItems[5],
  menuItems[8],
];

const footerAuthorText = '\u00A9\u00A0 М. Толстова, Я. Зильберман, ' + new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__columns'>
        <div className='footer__column footer__column_type_first'>
          <Logo place='footer' />
          <p className='footer__author'>{footerAuthorText}</p>
        </div>
        <div className='footer__column footer__column_type_second'>
          <h3 className='footer__menu-heading'>Меню</h3>
          <nav>
            <ul className='footer__menu-items'>
              {footerMenuItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className='footer__menu-item-link' onClick={handleScrollToTop}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className='footer__column footer__column_type_third'>
          <h3 className='footer__menu-heading'>Контакты</h3>
          <ContactsList />
        </div>
      </div>
      <div className='footer__column footer__column_type_fourth'>
        <p className='footer__author footer__author_type_shown'>{footerAuthorText}</p>
      </div>
    </footer>
  );
};
