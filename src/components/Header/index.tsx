import { BreadCrumbs, Logo, MainMenu, SearchForm, HeaderIcons } from '../../components';
import { useDispatch } from 'react-redux';
import './Header.scss';
import { setCloseSearch, setIsSearchOpen } from '../../redux/searchSlice/slice';
import { useLocation } from 'react-router-dom';
import React from 'react';
import { BurgerMenu } from '../BurgerMenu';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [isBurgerMenuOpen, setisBurgerMenuOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (pathname !== '/searchresults') {
      dispatch(setCloseSearch());
    }
  }, [pathname, dispatch]);

  return (
    <header className='header'>
      <div className='header__menu-container'>
        <Logo />
        <MainMenu place='header' />
        <HeaderIcons
          onSearchClick={() => dispatch(setIsSearchOpen())}
          onBurgerButtonClick={() => setisBurgerMenuOpen(true)}
        />
        <BurgerMenu isOpen={isBurgerMenuOpen} onClose={() => setisBurgerMenuOpen(false)} />
      </div>
      <SearchForm />
      {pathname !== '/' && pathname !== '/searchresults' && <BreadCrumbs />}
    </header>
  );
};
