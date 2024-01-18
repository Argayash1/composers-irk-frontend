import React from 'react';
import './CTA.scss';
import { Link } from 'react-router-dom';
import { handleScrollToTop } from '../../utils/utils';
import { ButtonTypeEnum } from '../SearchButton';
import clsx from 'clsx';

type CTAProps = {
  linkText?: string;
  path?: string;
  place?: string;
  onClick?: () => void;
};

export const CTA = ({ linkText = 'Подробнее', path, place, onClick }: CTAProps) => {
  const ctaButtonClassName = clsx('cta', 'cta_type_button', place === 'full-project' && 'cta_place_full-project');

  const ctaLinkClassName = clsx(
    'cta',
    'cta_type_link',
    linkText !== 'Подробнее' && 'cta_border_grey',
    place === 'main' && 'cta_place_main',
    path && path === '/scores' && 'cta_place_full-union-member',
    place === 'projects' && 'cta_place_projects',
  );

  return (
    <>
      {!path ? (
        <button className={ctaButtonClassName} type={ButtonTypeEnum.BUTTON} onClick={onClick}>
          Поделиться
        </button>
      ) : (
        <Link to={path} className={ctaLinkClassName} onClick={handleScrollToTop}>
          {linkText}
        </Link>
      )}
    </>
  );
};
