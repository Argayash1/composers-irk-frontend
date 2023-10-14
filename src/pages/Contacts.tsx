import React from 'react';
import { PageTitle } from '../components';

export const Contacts: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Контакты';
  }, []);

  return (
    <div className='contacts'>
      <PageTitle name='Контакты' />
    </div>
  );
};

export default Contacts;
