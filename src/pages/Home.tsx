import React from 'react';
import { BrandBanner, Search } from '../components';

const Home: React.FC = () => {
  return (
    <div>
      <Search />
      <BrandBanner />
    </div>
  );
};

export default Home;
