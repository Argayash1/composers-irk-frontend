import React from 'react';
import './ContactItem.scss';

type ContactItemProps = {
  svgIconElement?: React.ReactNode;
  iconUrl?: string;
  text: string;
  place?: string;
};

export const ContactItem: React.FC<ContactItemProps> = ({ iconUrl, text, place, svgIconElement }) => {
  const hrefProperty = text.includes('@') ? `mailto: ${text}` : text.includes('+') ? `tel:${text}` : `https://${text}`;
  const contactItemTextClassName = `contact-item__text ${
    place === 'contacts' ? 'contact-item__text_place_contacts' : ''
  }`;
  const contactItemIconClassName = `contact-item__icon ${
    place === 'contacts' ? 'contact-item__icon_place_contacts' : ''
  }`;

  return (
    <a className='contact-item' href={hrefProperty}>
      {place === 'contacts' ? (
        <div className={contactItemIconClassName} style={{ backgroundImage: `url(${iconUrl})` }} />
      ) : (
        svgIconElement
      )}
      <p className={contactItemTextClassName}>{text}</p>
    </a>
  );
};
