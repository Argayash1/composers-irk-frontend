import { Logo } from '../Logo';
import { MailLink } from '../MailLink';
import { MainMenu } from '../MainMenu';
import { SearchButton } from '../SearchButton';
import { VKLink } from '../VKLink';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header__title-container'>
        <Logo />
        <p className='header__title'>
          иооо <br />
          союз композиторов
        </p>
      </div>
      <MainMenu />
      <div className='header__icons'>
        <SearchButton type='button' />
        <VKLink />
        <MailLink />
      </div>
    </header>
  );
};
