import React from 'react';
import { NewsContainer, PageTitle, Pagination, menuItems } from '../components';
import { useAppDispatch } from '../redux/store';
import { fetchNews } from '../redux/news/asyncActions';
import { useSelector } from 'react-redux';
import { selectNewsData } from '../redux/news/selectors';
import { selectCurrentPage } from '../redux/searchSlice/selectors';

const News = () => {
  const dispatch = useAppDispatch();

  const { items } = useSelector(selectNewsData);
  const currentPage = useSelector(selectCurrentPage);

  React.useEffect(() => {
    document.title = 'Новости';
  }, []);

  React.useEffect(() => {
    dispatch(fetchNews(currentPage));
  }, [dispatch, currentPage]);

  return (
    <main className='news'>
      <PageTitle name={menuItems[1].name} />
      <NewsContainer place='news' itemsArray={items} />
      <Pagination />
    </main>
  );
};

export default News;
