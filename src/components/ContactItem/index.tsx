import React from 'react';
import './ContactItem.scss';

type ContactItemProps = {
  iconUrl: string;
  text: string;
  altText: string;
  place?: string;
};

export const ContactItem: React.FC<ContactItemProps> = ({ iconUrl, text, altText, place }) => {
  const hrefProperty = text.includes('@') ? `mailto: ${text}` : `https://${text}`;
  const contactItemTextClassName = `contact-item__text ${
    place === 'contacts' ? 'contact-item__text_place_contacts' : ''
  }`;

  return (
    <>
      {text.includes('@') || text.includes('/') ? (
        <a className='contact-item' href={hrefProperty}>
          <img src={iconUrl} alt={altText} />
          <p className={contactItemTextClassName}>{text}</p>
        </a>
      ) : (
        <div className='contact-item'>
          <img src={iconUrl} alt={altText} />
          <p className={contactItemTextClassName}>{text}</p>
        </div>
      )}
    </>
  );
};
