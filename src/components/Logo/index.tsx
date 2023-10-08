import logo from '../../assets/logo.jpg';
import '../Logo/Logo.scss';

export const Logo: React.FC = () => {
  return <img className='logo' src={logo} alt='Логотип Союза композиторов' />;
};
