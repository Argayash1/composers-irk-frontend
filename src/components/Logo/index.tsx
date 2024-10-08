import logo from '../../assets/images/logo.png';
import logo2 from '../../assets/images/logo-place-brand-banner.png';
import '../Logo/Logo.scss';
import { Link } from 'react-router-dom';
import { handleScrollToTop } from '../../utils/utils';

type LogoProps = {
  place?: string;
};

export const Logo = ({ place }: LogoProps) => {
  return (
    <Link
      to='/'
      className={`logo ${place === 'footer' ? 'logo_place_footer' : ''} ${
        place === 'brand-banner' ? 'logo_place_brand-banner' : ''
      } ${place === 'admin' || place === 'login' ? 'logo_place_admin' : ''}`}
      onClick={handleScrollToTop}
    >
      <img
        className={`logo__image ${place === 'brand-banner' || place === 'admin' ? 'logo__image_place_main' : ''} ${
          place === 'contacts' ? 'logo__image_place_contacts' : ''
        }`}
        src={place === 'brand-banner' || place === 'contacts' ? logo2 : logo}
        alt='Логотип Союза композиторов'
      />
      {place !== 'brand-banner' && place !== 'contacts' && place !== 'admin' && (
        <p className={`logo__title ${place === 'footer' ? 'logo__title_place_footer' : ''}`}>
          иооо <br />
          союз композиторов
        </p>
      )}
    </Link>
  );
};
