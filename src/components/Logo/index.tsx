import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo-place-brand-banner.png';
import '../Logo/Logo.scss';

type LogoProps = {
  place?: string;
};

export const Logo: React.FC<LogoProps> = ({ place }) => {
  return (
    <img
      className={`logo ${place === 'brand-banner' ? 'logo_place_main' : ''}`}
      src={place === 'brand-banner' ? logo2 : logo}
      alt='Логотип Союза композиторов'
    />
  );
};
