import React from 'react';
import { NewsContainer } from '../components';

const News: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Новости';
  }, []);

  return (
    <div>
      <NewsContainer place='news' />
    </div>
  );
};

export default News;
