import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo-place-brand-banner.png';
import '../Logo/Logo.scss';
import { Link } from 'react-router-dom';

type LogoProps = {
  place?: string;
};

export const Logo: React.FC<LogoProps> = ({ place }) => {
  return (
    <Link to='/' className='logo'>
      <img
        className={`logo__image ${place === 'brand-banner' ? 'logo__image_place_main' : ''}`}
        src={place === 'brand-banner' ? logo2 : logo}
        alt='Логотип Союза композиторов'
      />
      {place !== 'brand-banner' && (
        <p className='logo__title'>
          иооо <br />
          союз композиторов
        </p>
      )}
    </Link>
  );
};
