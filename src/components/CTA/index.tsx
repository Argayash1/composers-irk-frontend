import React from 'react';
import './CTA.scss';
import { Link } from 'react-router-dom';
import { handleScrollToTop } from '../../utils/utils';
import { ButtonTypeEnum } from '../SearchButton';

type CTAProps = {
  linkText?: string;
  path?: string;
  borderColor?: string;
  place?: string;
  onClick?: () => void;
};

export const CTA = ({ linkText = 'Подробнее', path, borderColor, place, onClick }: CTAProps) => {
  const [windowWidth, setWindowWidth] = React.useState(window.screen.width);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.screen.width);
    };

    let timeoutId: NodeJS.Timeout;

    const delayedHandleResize = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        handleResize();
      }, 1000);
    };

    window.addEventListener('resize', delayedHandleResize);

    return () => {
      window.removeEventListener('resize', delayedHandleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {!path ? (
        <button
          className={`cta cta_type_button ${place === 'full-project' ? 'cta_place_full-project' : ''}`}
          type={ButtonTypeEnum.BUTTON}
          onClick={onClick}
        >
          {linkText}
        </button>
      ) : (
        <Link
          to={path}
          className={`cta cta_type_link ${borderColor === 'grey' ? 'cta_border_grey' : ''}  ${
            path === '/scores' || path.includes('projects') ? 'cta_place_full-union-member' : ''
          }`}
          onClick={handleScrollToTop}
        >
          {borderColor === 'grey' && windowWidth <= 546 ? '' : linkText}
        </Link>
      )}
    </>
  );
};
