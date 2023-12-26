import React from 'react';
import { ContactItem, Logo, TitleContainer, menuItems } from '../components';
import phone from '../assets/icons/phone-icon-contacts.svg';
import email from '../assets/icons/mail-icon-contacts.svg';
import vk from '../assets/icons/vk-icon-contacts.svg';

const contactsData = [
  { iconUrl: phone, text: '+7 (999) 9999999', altText: 'Телефон' },
  { iconUrl: email, text: 'composersirk@mail.ru', altText: 'E-mail' },
  { iconUrl: vk, text: 'vk.com/unioncomposers', altText: 'VK' },
];

export const Contacts = () => {
  React.useEffect(() => {
    document.title = 'Контакты';
  }, []);

  return (
    <main className='contacts'>
      <TitleContainer name={menuItems[8].name} path='/' />
      <ul className='contacts__list'>
        {contactsData.map((contact, index) => (
          <li key={index} className='contacts__list-item'>
            <ContactItem place='contacts' {...contact} />
          </li>
        ))}
        <li className='contacts__list-item'>
          <Logo place='contacts' />
        </li>
      </ul>
    </main>
  );
};

export default Contacts;
