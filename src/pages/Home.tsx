import React from 'react';
import { BrandBanner, Search } from '../components';

const Home: React.FC = () => {
  const [isSearchBarVisible, setIsSearchBarVisible] = React.useState(true);

  const handleShowSearchBar = () => {
    setIsSearchBarVisible(true);
  };

  const handleHideSearchBar = () => {
    setIsSearchBarVisible(false);
  };

  return (
    <div>
      {isSearchBarVisible && <Search />}
      <BrandBanner />
    </div>
  );
};

export default Home;
