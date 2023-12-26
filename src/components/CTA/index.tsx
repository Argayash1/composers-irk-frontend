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
            place === 'main' ? 'cta_place_main' : ''
          }${path === '/scores' || path.includes('projects') ? 'cta_place_full-union-member' : ''}`}
          onClick={handleScrollToTop}
        >
          {linkText}
        </Link>
      )}
    </>
  );
};
