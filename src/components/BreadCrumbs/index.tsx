import React from 'react';
import './BreadCrumbs.scss';
import { useLocation } from 'react-router-dom';
import { Crumb } from '../Crumb';

export interface IBreadCrumbsLocationState {
  id: string;
  path: string;
  title: string;
  url: string;
}

export const BreadCrumbs: React.FC = () => {
  const { state } = useLocation();
  return (
    <nav className='bread-crumbs'>
      {/* {state.map((crumb) => {
        <Crumb {...crumb} key={crumb.url} />;
      })} */}
    </nav>
  );
};
