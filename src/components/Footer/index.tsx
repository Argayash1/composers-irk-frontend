import React from 'react';
import './Footer.scss';
import { Logo, VKLink, MailLink, ContactItem } from '../../components';
import { Link } from 'react-router-dom';
import { menuItems } from '../MainMenu';
import { handleScrollToTop } from '../../utils/utils';
import phone from '../../assets/contacts-phone.svg';
import email from '../../assets/contacts-mail.svg';
import adress from '../../assets/contacts-adress.svg';

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

const contacts = [
  { iconUrl: phone, text: '+7 (999) 9999999', altText: 'Телефон' },
  { iconUrl: email, text: 'composersirk@mail.ru', altText: 'E-mail' },
  { iconUrl: adress, text: 'ул. Грязнова, 12, Иркутск', altText: 'Адрес' },
];

export const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__columns'>
        <div className='footer__column'>
          <Logo place='footer' />
          <ul className='footer__social-icons'>
            <li>
              <VKLink />
            </li>
            <li>
              <MailLink />
            </li>
          </ul>
          <p className='footer__author'>&copy;&nbsp; Я. Зильберман, {new Date().getFullYear()}</p>
        </div>
        <div className='footer__column'>
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
        <div className='footer__column'>
          <h3 className='footer__menu-heading'>Контакты</h3>
          <ul className='footer__contact-items'>
            {contacts.map((contact, index) => (
              <li key={index}>
                <ContactItem {...contact} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
