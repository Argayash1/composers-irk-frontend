import React from 'react';
import './MailLink.scss';

type MailLinkProps = {
  place?: string;
};

export const MailLink: React.FC<MailLinkProps> = ({ place }) => {
  return (
    <a className='mail-link' href='mailto:example@example.com' target='_blank' rel='noreferrer'>
      <div className={`mail-link__icon ${place === 'footer' ? 'mail-link__icon_place_footer' : ''}`}></div>
    </a>
  );
};
