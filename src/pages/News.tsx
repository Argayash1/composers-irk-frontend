import React from 'react';
import { NewsContainer, PageTitle, menuItems } from '../components';

const News: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Новости';
  }, []);

  return (
    <main className='news'>
      <PageTitle name={menuItems[1].name} />
      <NewsContainer place='news' />
    </main>
  );
};

export default News;
