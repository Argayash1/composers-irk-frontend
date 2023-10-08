import { Logo } from '../Logo';
import { MainMenu } from '../MainMenu';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <Logo />
      <MainMenu />
    </header>
  );
};
