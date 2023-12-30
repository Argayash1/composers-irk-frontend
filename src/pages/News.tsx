import React from 'react';
import { NewsContainer, TitleContainer, Pagination, menuItems } from '../components';
import { useAppDispatch } from '../redux/store';
import { fetchNews } from '../redux/news/asyncActions';
import { useSelector } from 'react-redux';
import { selectNewsData } from '../redux/news/selectors';
import { selectCurrentPage } from '../redux/searchSlice/selectors';

const News = () => {
  const dispatch = useAppDispatch();

  const { items, status } = useSelector(selectNewsData);
  const currentPage = useSelector(selectCurrentPage);

  const screenWidth = window.screen.width;
  const limit = screenWidth > 638 ? 9 : 4;

  React.useEffect(() => {
    document.title = 'Новости';
  }, []);

  React.useEffect(() => {
    dispatch(fetchNews({ currentPage, limit }));
  }, [dispatch, currentPage, limit]);

  return (
    <main className='news'>
      <TitleContainer name={menuItems[1].name} path='/' />
      <NewsContainer place='news' itemsArray={items} status={status} limit={limit} />
      <Pagination />
    </main>
  );
};

export default News;
