import React from 'react';
import { ContactsList, TitleContainer } from '../components';
import phone from '../assets/icons/phone-icon-contacts.svg';
import email from '../assets/icons/mail-icon-contacts.svg';
import vk from '../assets/icons/vk-icon-contacts.svg';
import { menuItems } from '../utils/constants';

export type Contact = {
  iconUrl: string;
  text: string;
  altText: string;
};

const contactsData: Contact[] = [
  {
    iconUrl: phone,
    text: '+7 (999) 9999999',
    altText: 'Телефон',
  },
  { iconUrl: email, text: 'composersirk@mail.ru', altText: 'E-mail' },
  { iconUrl: vk, text: 'vk.com/unioncomposers', altText: 'VK' },
];

export const Contacts = () => {
  React.useEffect(() => {
    document.title = 'Контакты';
  }, []);

  return (
    <main className='contacts'>
      <TitleContainer name={menuItems[8].name} place='contacts' />
      <section>
        <ContactsList place='contacts' contactsData={contactsData} />
      </section>
    </main>
  );
};

export default Contacts;
