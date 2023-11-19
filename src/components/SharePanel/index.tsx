import React from 'react';
import VkIcon from '../../assets/icons/share-pannel-vk-icon.svg';
import TGIcon from '../../assets/icons/share-pannel-telegram-icon.svg';
import OkIcon from '../../assets/icons/share-pannel-odnoclassniki-icon.svg';
import twitterIcon from '../../assets/icons/share-pannel-twitter-icon.svg';
import WAIcon from '../../assets/icons/share-pannel-whatsapp-icon.svg';
import closeIcon from '../../assets/icons/share-pannel-close-icon.svg';
import './SharePanel.scss';

type SharePanelProps = {
  itemTitle: string;
  onClick: () => void;
};

export const SharePanel: React.FC<SharePanelProps> = ({ itemTitle, onClick }) => {
  const currentUrl = window.location.href;

  const buttonItems = [
    { id: 0, image: VkIcon, link: `https://vk.com/share.php?url={${currentUrl}}` },
    { id: 1, image: TGIcon, link: `https://t.me/share/url?url=${currentUrl}&text=${itemTitle}` },
    { id: 2, image: twitterIcon, link: `https://twitter.com/intent/tweet?url=${currentUrl}&text=${itemTitle}` },
    { id: 3, image: OkIcon, link: `https://connect.ok.ru/offer?url=${currentUrl}&title=${itemTitle}` },
    { id: 4, image: WAIcon, link: `whatsapp://send?text=${itemTitle}` },
    { id: 5, image: closeIcon },
  ];

  return (
    <ul className='share-panel'>
      {buttonItems.map((buttonItem, index) => (
        <li key={buttonItem.id}>
          {index === buttonItems.length - 1 ? (
            <button
              style={{
                backgroundImage: `url(${buttonItem.image})`,
              }}
              className='share-panel__button'
              onClick={onClick}
            ></button>
          ) : (
            <a href={buttonItem.link} className='share-panel__link' onClick={onClick}>
              <img src={buttonItem.image} alt='' />
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};
