import React from 'react';
import VkIcon from '../../assets/icons/share-pannel-vk-icon.svg';
import TGIcon from '../../assets/icons/share-pannel-telegram-icon.svg';
import OkIcon from '../../assets/icons/share-pannel-odnoclassniki-icon.svg';
import twitterIcon from '../../assets/icons/share-pannel-twitter-icon.svg';
import WAIcon from '../../assets/icons/share-pannel-whatsapp-icon.svg';
import closeIcon from '../../assets/icons/share-pannel-close-icon.svg';
import './SharePanel.scss';

const buttonItems = [
  { image: VkIcon },
  { image: TGIcon },
  { image: twitterIcon },
  { image: OkIcon },
  { image: WAIcon },
  { image: closeIcon },
];

type SharePanelProps = {
  onClick: () => void;
};

export const SharePanel: React.FC<SharePanelProps> = ({ onClick }) => {
  return (
    <ul className='share-panel'>
      {buttonItems.map((buttonItem, index) => (
        <li key={index}>
          <button
            style={{
              backgroundImage: `url(${buttonItem.image})`,
            }}
            className='share-panel__button'
            onClick={onClick}
          ></button>
        </li>
      ))}
    </ul>
  );
};
