import React from 'react';
import { BrandBanner, CTA, NewsContainer, PageTitle, menuItems } from '../components';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { selectNewsData } from '../redux/news/selectors';
import { fetchNews } from '../redux/news/asyncActions';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { items } = useSelector(selectNewsData);

  React.useEffect(() => {
    document.title = 'ИООО "Союз композиторов"';
  }, []);

  React.useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <main className='home'>
      <BrandBanner />
      <div className='home__title-container'>
        <PageTitle name={menuItems[1].name} place='main' />
        <CTA linkText='Все новости' path='/news' borderColor='grey' />
      </div>
      <NewsContainer itemsArray={items} />
    </main>
  );
};

export default Home;
