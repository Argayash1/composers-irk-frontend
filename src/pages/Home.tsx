import React from 'react';
import { BrandBanner, CTA, NewsContainer, PageTitle, menuItems } from '../components';

const Home: React.FC = () => {
  React.useEffect(() => {
    document.title = 'ИООО "Союз композиторов"';
  }, []);

  return (
    <main className='home'>
      <BrandBanner />
      <div className='home__title-container'>
        <PageTitle name={menuItems[1].name} place='main' />
        <CTA linkText='Все новости' path='/news' borderColor='grey' />
      </div>
      <NewsContainer />
    </main>
  );
};

export default Home;
