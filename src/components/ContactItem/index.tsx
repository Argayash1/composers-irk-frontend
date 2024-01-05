import React from 'react';
import './ContactItem.scss';
import clsx from 'clsx';

type ContactItemProps = {
  svgIconElement?: React.ReactNode;
  iconUrl?: string;
  text: string;
  place?: string;
};

export const ContactItem = ({ iconUrl, text, place, svgIconElement }: ContactItemProps) => {
  const hrefProperty = text.includes('@') ? `mailto: ${text}` : text.includes('+') ? `tel:${text}` : `https://${text}`;

  return (
    <a className='contact-item' href={hrefProperty}>
      {place === 'contacts' ? (
        <div
          className={clsx('contact-item__icon', place === 'contacts' && 'contact-item__icon_place_contacts')}
          style={{ backgroundImage: `url(${iconUrl})` }}
        />
      ) : (
        svgIconElement
      )}

      <p className={clsx('contact-item__text', place === 'contacts' && 'contact-item__text_place_contacts')}>{text}</p>
    </a>
  );
};
