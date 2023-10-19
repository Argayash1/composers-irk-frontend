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

      <iframe
        src='https://yandex.ru/map-widget/v1/?ll=104.286995%2C52.280570&mode=search&oid=1676873438&ol=biz&sctx=ZAAAAAgBEAAaKAoSCYDz4sRXElpAEbM%2FUG7bI0pAEhIJTDeJQWDlcD8RTdu%2FstKkZD8iBgABAgMEBSgKOABA0s0GSAFqAnJ1nQHNzEw9oAEAqAEAvQFqmzQbwgEF3p3MnwbqAQDyAQD4AQCCAjDQmNGA0LrRg9GC0YHQuiDQodC%2B0Y7QtyDQutC%2B0LzQv9C%2B0LfQuNGC0L7RgNC%2B0LKKAgCSAgI2M5oCDGRlc2t0b3AtbWFwc7ACAQ%3D%3D&sll=104.286995%2C52.280570&sspn=0.002817%2C0.001721&text=%D0%98%D1%80%D0%BA%D1%83%D1%82%D1%81%D0%BA%20%D0%A1%D0%BE%D1%8E%D0%B7%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%BE%D0%B2&z=18.6'
        title='maps-iframe'
        className='contacts__iframe'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Contacts;
