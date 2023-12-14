import React from 'react';
import './CTA.scss';
import { Link } from 'react-router-dom';
import { handleScrollToTop } from '../../utils/utils';

type CTAProps = {
  linkText?: string;
  path?: string;
  borderColor?: string;
  onClick?: () => void;
};

export const CTA = ({ linkText, path, borderColor, onClick }: CTAProps) => {
  return (
    <>
      {!path ? (
        <button className='cta' onClick={onClick}>
          {linkText}
        </button>
      ) : (
        <Link
          to={path}
          className={`cta ${borderColor === 'grey' ? 'cta_border_grey' : ''} ${
            path === '/projects' || path === '/scores' ? 'cta_grid-column_23' : ''
          } `}
          onClick={handleScrollToTop}
        >
          {linkText ? linkText : 'Подробнее'}
        </Link>
      )}
    </>
  );
};
