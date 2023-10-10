import { ButtonTypeEnum, Logo, MailLink, MainMenu, SearchButton, VKLink } from '../../components';
import { useDispatch } from 'react-redux';
import './Header.scss';
import { setIsSearchOpen } from '../../redux/searchSlice/slice';

export const Header: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <header className='header'>
      <Logo />
      <MainMenu />
      <div className='header__icons'>
        <SearchButton type={ButtonTypeEnum.BUTTON} onClick={() => dispatch(setIsSearchOpen())} />
        <VKLink />
        <MailLink />
      </div>
    </header>
  );
};
