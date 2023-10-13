import React from 'react';
import './CTALink.scss';
import { Link } from 'react-router-dom';
import { handleScrollToTop } from '../../utils/utils';

type CTALinkProps = {
  linkText?: string;
  path: string;
  borderColor?: string;
};

export const CTALink: React.FC<CTALinkProps> = ({ linkText, path, borderColor }) => {
  return (
    <Link
      to={path}
      className={`cta-link ${borderColor === 'grey' ? 'cta-link_border_grey' : ''} ${
        path === '/projects' ? 'cta-link_grid-column_23' : ''
      }`}
      onClick={handleScrollToTop}
    >
      {linkText ? linkText : 'Подробнее'}
    </Link>
  );
};
