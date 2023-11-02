import React from 'react';
import { NewsContainer, PageTitle, Pagination, menuItems } from '../components';
import { useAppDispatch } from '../redux/store';
import { fetchNews } from '../redux/news/asyncActions';
import { useSelector } from 'react-redux';
import { selectNewsData } from '../redux/news/selectors';

const News: React.FC = () => {
  const dispatch = useAppDispatch();

  const { items } = useSelector(selectNewsData);

  React.useEffect(() => {
    document.title = 'Новости';
  }, []);

  React.useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <main className='news'>
      <PageTitle name={menuItems[1].name} />
      <NewsContainer place='news' itemsArray={items} />
      <Pagination />
    </main>
  );
};

export default News;
