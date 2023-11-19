import React from 'react';
import './HeaderIcons.scss';
import { ButtonTypeEnum, SearchButton } from '../SearchButton';
import { VKLink } from '../VKLink';
import { MailLink } from '../MailLink';
import { BurgerOpenButton } from '../BurgerOpenButton';

type HeaderIconsProps = {
  onSearchClick: () => void;
  onBurgerButtonClick: () => void;
};

export const HeaderIcons: React.FC<HeaderIconsProps> = ({ onSearchClick, onBurgerButtonClick }) => {
  const headerIconsItems = [
    <SearchButton type={ButtonTypeEnum.BUTTON} onClick={onSearchClick} />,
    <VKLink />,
    <MailLink />,
    <BurgerOpenButton onClick={onBurgerButtonClick} />,
  ];

  return (
    <ul className='header-icons'>
      {headerIconsItems.map((headerIconsItem, index) => (
        <li className='header-icons__item' key={index}>
          {headerIconsItem}
        </li>
      ))}
    </ul>
  );
};
