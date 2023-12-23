import React from 'react';
import './OurHistory.scss';
import { TextContent } from '../TextContent';
import { historyArray } from '../../utils/historyArray';

export const OurHistory = () => {
  return (
    <section className='our-history'>
      <TextContent textArray={historyArray} place='about-us' />
    </section>
  );
};
