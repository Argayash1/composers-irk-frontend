import React from 'react';
import { BrandBanner, Search } from '../components';
import { useSelector } from 'react-redux';
import { selectIsSearchOpen } from '../redux/searchSlice/selectors';

const Home: React.FC = () => {
  const isSearchOpen = useSelector(selectIsSearchOpen);

  return (
    <div>
      {isSearchOpen && <Search />}
      <BrandBanner />
    </div>
  );
};

export default Home;
