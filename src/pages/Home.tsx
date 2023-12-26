import React from 'react';
import { BrandBanner, CTA, NewsContainer, TitleContainer, menuItems } from '../components';
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
    dispatch(fetchNews(1));
  }, [dispatch]);

  return (
    <main className='home'>
      <BrandBanner />
      <div className='home__title-container'>
        <TitleContainer name={menuItems[1].name} place='main' path='/news' />
        <CTA linkText='Все новости' path='/news' borderColor='grey' place='main' />
      </div>
      <NewsContainer itemsArray={items} />
    </main>
  );
};

export default Home;
