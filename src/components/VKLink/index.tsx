import React from 'react';
import './VKLink.scss';

type VKLinkProps = {
  place?: string;
};

export const VKLink: React.FC<VKLinkProps> = ({ place }) => {
  return (
    <a className='vk-link' href='https://vk.com/public170806854' target='_blank' rel='noreferrer'>
      <div className={`vk-link__icon ${place === 'footer' ? 'vk-link__icon_place_footer' : ''}`}></div>
    </a>
  );
};
