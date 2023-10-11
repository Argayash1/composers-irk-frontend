import { ButtonTypeEnum, Logo, MailLink, MainMenu, Search, SearchButton, VKLink } from '../../components';
import { useDispatch } from 'react-redux';
import './Header.scss';
import { setIsSearchOpen } from '../../redux/searchSlice/slice';

export const Header: React.FC = () => {
  const dispatch = useDispatch();

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
    </header>
  );
};
