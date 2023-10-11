import React from 'react';
import { BrandBanner, CTALink, Search } from '../components';
import { newsArray } from '../utils/newsArray';
import { NewsBlock } from '../components/NewsBlock';

const Home: React.FC = () => {
  React.useEffect(() => {
    document.title = 'ИООО "Союз композиторов"';
  }, []);

  return (
    <div className='home'>
      <BrandBanner />
      <div className='home__title-container'>
        <h2 className='home__title'>Новости</h2>
        <CTALink linkText='Все новости' path='/news' borderColor='grey' />
      </div>
      <ul className='home__news-container'>
        {newsArray.map((news, index) => (
          <li key={index}>
            <NewsBlock {...news} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
