import { BreadCrumbs, ButtonTypeEnum, Logo, MailLink, MainMenu, Search, SearchButton, VKLink } from '../../components';
import { useDispatch } from 'react-redux';
import './Header.scss';
import { setIsSearchOpen } from '../../redux/searchSlice/slice';
import { useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

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
      <Search />
      {pathname !== '/' && <BreadCrumbs />}
    </header>
  );
};
