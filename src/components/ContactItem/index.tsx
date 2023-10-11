import React from 'react';
import './ContactItem.scss';

type ContactItemProps = {
  iconUrl: string;
  text: string;
  altText: string;
};

export const ContactItem: React.FC<ContactItemProps> = ({ iconUrl, text, altText }) => {
  return (
    <div className='contact-item'>
      <img src={iconUrl} alt={altText} />
      <p className='contact-item__text'>{text}</p>
    </div>
  );
};
