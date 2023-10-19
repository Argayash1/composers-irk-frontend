import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BreadCrumbs.scss';

export const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((pathname) => pathname);

  return (
    <nav className='bread-crumbs'>
      {pathnames.length > 0 && (
        <ul className='bread-crumbs__list'>
          {pathnames.map((pathname, index) =>
            index === pathnames.length - 1 ? (
              <li className='bread-crumbs__list-item' key={index}>
                {pathname}
              </li>
            ) : (
              <li className='bread-crumbs__list-item' key={index}>
                <Link className='bread-crumbs__list-item_link' to={`/${pathnames.slice(0, index + 1).join('/')}`}>
                  {pathname}
                </Link>
                <span className='bread-crumbs__span'>|</span>
              </li>
            ),
          )}
        </ul>
      )}
    </nav>
  );
};
