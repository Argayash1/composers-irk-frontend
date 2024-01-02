import React from 'react';
import { BrandBanner, NewsContainer, TitleContainer, menuItems } from '../components';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { selectNewsData } from '../redux/news/selectors';
import { fetchNews } from '../redux/news/asyncActions';
import { selectCurrentPage } from '../redux/search/selectors';

const Home = () => {
  const dispatch = useAppDispatch();

  const { items, status } = useSelector(selectNewsData);
  const currentPage = useSelector(selectCurrentPage);

  const screenWidth = window.screen.width;
  const limit = screenWidth > 638 ? 6 : 3;

  React.useEffect(() => {
    document.title = 'ИООО "Союз композиторов"';
  }, []);

  React.useEffect(() => {
    dispatch(fetchNews({ currentPage: 1, limit }));
  }, [dispatch, currentPage, limit]);

  return (
    <main className='home'>
      <BrandBanner />
      <TitleContainer name={menuItems[1].name} place='main' path='/news' />
      <NewsContainer itemsArray={items} place='main' status={status} limit={limit} />
    </main>
  );
};

export default Home;
