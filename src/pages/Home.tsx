import React from 'react';
import { BrandBanner, NewsContainer, TitleContainer, menuItems } from '../components';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { selectNewsData } from '../redux/news/selectors';
import { fetchNews } from '../redux/news/asyncActions';

const Home = () => {
  const dispatch = useAppDispatch();

  const { items } = useSelector(selectNewsData);

  React.useEffect(() => {
    document.title = 'ИООО "Союз композиторов"';
  }, []);

  React.useEffect(() => {
    dispatch(fetchNews({ currentPage: 1, limit: 6 }));
  }, [dispatch]);

  return (
    <main className='home'>
      <BrandBanner />
      <TitleContainer name={menuItems[1].name} place='main' path='/news' />
      <NewsContainer itemsArray={items} place='main' />
    </main>
  );
};

export default Home;
