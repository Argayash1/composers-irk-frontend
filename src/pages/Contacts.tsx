import React from 'react';
import { ContactItem, PageTitle } from '../components';
import phone from '../assets/icons/phone-icon-contacts.svg';
import email from '../assets/icons/mail-icon-contacts.svg';
import adress from '../assets/icons/adress-icon-contacts.svg';
import vk from '../assets/icons/vk-icon-contacts.svg';

const contactsData = [
  { iconUrl: phone, text: '+7 (999) 9999999', altText: 'Телефон' },
  { iconUrl: adress, text: 'ул. Грязнова, 12, Иркутск', altText: 'Адрес' },
  { iconUrl: email, text: 'composersirk@mail.ru', altText: 'E-mail' },
  { iconUrl: vk, text: 'vk.com/unioncomposers', altText: 'VK' },
];

export const Contacts: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Контакты';
  }, []);

  return (
    <div className='contacts'>
      <PageTitle name='Контакты' />
      <ul className='contacts__list'>
        {contactsData.map((contact, index) => (
          <li key={index}>
            <ContactItem place='contacts' {...contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
