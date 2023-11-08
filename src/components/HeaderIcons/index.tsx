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
  return (
    <ul className='header-icons'>
      <li className='header-icons__item'>
        <SearchButton type={ButtonTypeEnum.BUTTON} onClick={onSearchClick} />
      </li>
      <li className='header-icons__item'>
        <VKLink />
      </li>
      <li className='header-icons__item'>
        <MailLink />
      </li>
      <li className='header-icons__item'>
        <BurgerOpenButton onClick={onBurgerButtonClick} />
      </li>
    </ul>
  );
};
