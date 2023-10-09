import React from 'react';
import { Logo } from '../Logo';
import './BrandBanner.scss';

export const BrandBanner: React.FC = () => {
  return (
    <section className='brand-banner'>
      <p className='brand-banner__subtitle'>Иркутская областная общественная организация </p>
      <h1 className='brand-banner__title'>«Союз композиторов»</h1>
      <Logo place='brand-banner' />
    </section>
  );
};
