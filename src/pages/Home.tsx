import React from 'react';
import { BrandBanner, NewsContainer } from '../components';

const Home: React.FC = () => {
  React.useEffect(() => {
    document.title = 'ИООО "Союз композиторов"';
  }, []);

  return (
    <main className='home'>
      <BrandBanner />
      <NewsContainer />
    </main>
  );
};

export default Home;
