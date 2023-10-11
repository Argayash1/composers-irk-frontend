import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo-place-brand-banner.png';
import '../Logo/Logo.scss';
import { Link } from 'react-router-dom';
import { handleScrollToTop } from '../../utils/utils';

type LogoProps = {
  place?: string;
};

export const Logo: React.FC<LogoProps> = ({ place }) => {
  return (
    <Link to='/' className={`logo ${place === 'footer' ? 'logo_margin-bottom_big' : ''}`} onClick={handleScrollToTop}>
      <img
        className={`logo__image ${place === 'brand-banner' ? 'logo__image_place_main' : ''}`}
        src={place === 'brand-banner' ? logo2 : logo}
        alt='Логотип Союза композиторов'
      />
      {place !== 'brand-banner' && (
        <p className={`logo__title ${place === 'footer' ? 'logo__title_color_white' : ''}`}>
          иооо <br />
          союз композиторов
        </p>
      )}
    </Link>
  );
};
