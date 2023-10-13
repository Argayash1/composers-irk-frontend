import React from 'react';
import { BrandBanner, NewsContainer } from '../components';

const Home: React.FC = () => {
  React.useEffect(() => {
    document.title = 'ИООО "Союз композиторов"';
  }, []);

  return (
    <div className='home'>
      <BrandBanner />
      <NewsContainer />
    </div>
  );
};

export default Home;
