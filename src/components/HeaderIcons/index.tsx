import React from 'react';
import './HeaderIcons.scss';
import { ButtonTypeEnum, SearchButton } from '../SearchButton';
import { VKLink } from '../VKLink';
import { MailLink } from '../MailLink';
import { BurgerOpenButton } from '../BurgerOpenButton';
import clsx from 'clsx';

type HeaderIconsProps = {
  onSearchClick: () => void;
  onBurgerButtonClick: () => void;
  pathName: string;
};

export const HeaderIcons = ({ onSearchClick, onBurgerButtonClick, pathName }: HeaderIconsProps) => {
  const headerIconsItems = [
    <SearchButton type={ButtonTypeEnum.BUTTON} onClick={onSearchClick} place='header' />,
    <VKLink />,
    <MailLink />,
    <BurgerOpenButton onClick={onBurgerButtonClick} />,
  ];

  return (
    <ul className='header-icons'>
      {headerIconsItems.map((headerIconsItem, index) => (
        <li
          className={clsx('header-icons__item', pathName === '/search' && 'header-icons__item_place_search')}
          key={index}
        >
          {headerIconsItem}
        </li>
      ))}
    </ul>
  );
};
