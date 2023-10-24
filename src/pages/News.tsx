import React from 'react';
import { NewsContainer } from '../components';

const News: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Новости';
  }, []);

  return (
    <main>
      <NewsContainer place='news' />
    </main>
  );
};

export default News;
