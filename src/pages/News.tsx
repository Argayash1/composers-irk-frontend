import React from 'react';

const News: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Новости';
  }, []);

  return <div>News</div>;
};

export default News;
