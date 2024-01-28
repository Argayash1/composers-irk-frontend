import { BreadCrumbs, Logo, MainMenu, SearchForm, HeaderIcons } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import './Header.scss';
import { setOpenSearch, setCloseSearch } from '../../redux/search/slice';
import { useLocation } from 'react-router-dom';
import React from 'react';
import { BurgerMenu } from '../BurgerMenu';
import { RootState } from '../../redux/store';

export const Header = () => {
  const { isSearchOpen } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    function handleAutoCloseMenu() {
      window.onresize = () => {
        setIsBurgerMenuOpen(false);
      };
    }

    if (isBurgerMenuOpen) {
      window.addEventListener('resize', handleAutoCloseMenu);
      return () => window.removeEventListener('resize', handleAutoCloseMenu);
    }
  }, [isBurgerMenuOpen]);

  React.useEffect(() => {
    if (pathname !== '/searchresults') {
      dispatch(setCloseSearch());
    }
  }, [pathname, dispatch]);

  const handleToggleSearch = () => {
    if (isSearchOpen) {
      dispatch(setCloseSearch());
    } else {
      dispatch(setOpenSearch());
    }
  };

  return (
    <header className='header'>
      <div className='header__menu-container'>
        <Logo />
        <MainMenu place='header' />
        <HeaderIcons
          onSearchClick={handleToggleSearch}
          onBurgerButtonClick={() => setIsBurgerMenuOpen(true)}
          pathName={pathname}
        />
        <BurgerMenu isOpen={isBurgerMenuOpen} onClose={() => setIsBurgerMenuOpen(false)} />
      </div>
      <SearchForm place='header' />
      {pathname !== '/' && pathname !== '/searchresults' && pathname !== '/search' && <BreadCrumbs />}
    </header>
  );
};
