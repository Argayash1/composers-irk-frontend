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

export const HeaderIcons = ({ onSearchClick, onBurgerButtonClick }: HeaderIconsProps) => {
  const headerIconsItems = [
    <SearchButton type={ButtonTypeEnum.BUTTON} onClick={onSearchClick} place='header' />,
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
