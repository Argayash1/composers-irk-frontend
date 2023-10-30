import {
  BreadCrumbs,
  ButtonTypeEnum,
  Logo,
  MailLink,
  MainMenu,
  SearchForm,
  SearchButton,
  VKLink,
} from '../../components';
import { useDispatch } from 'react-redux';
import './Header.scss';
import { setCloseSearch, setIsSearchOpen } from '../../redux/searchSlice/slice';
import { useLocation } from 'react-router-dom';
import React from 'react';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname !== '/searchresults') {
      dispatch(setCloseSearch());
    }
  }, [pathname, dispatch]);

  return (
    <header className='header'>
      <div className='header__menu-container'>
        <Logo />
        <MainMenu />
        <div className='header__icons'>
          <SearchButton type={ButtonTypeEnum.BUTTON} onClick={() => dispatch(setIsSearchOpen())} />
          <VKLink />
          <MailLink />
        </div>
      </div>
      <SearchForm />
      {pathname !== '/' && pathname !== '/searchresults' && <BreadCrumbs />}
    </header>
  );
};
