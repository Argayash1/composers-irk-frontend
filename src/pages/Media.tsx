import React from 'react';
import { Tabs, PageTitle } from '../components';

const tabNames = ['Аудиозаписи', 'Видеозаписи'];

const Media: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Медиа';
  }, []);

  return (
    <div className='media'>
      <PageTitle name='Медиа' />
      <Tabs tabNamesArray={tabNames} />
    </div>
  );
};

export default Media;
