import React from 'react';
import { NewsContainer, TitleContainer, Pagination, menuItems } from '../components';
import { useAppDispatch } from '../redux/store';
import { fetchNews } from '../redux/news/asyncActions';
import { useSelector } from 'react-redux';
import { selectNewsCurrentPage, selectNewsData } from '../redux/news/selectors';
import { setCurrentPage } from '../redux/news/slice';

const News = () => {
  const dispatch = useAppDispatch();

  const { items, status } = useSelector(selectNewsData);
  const currentPage = useSelector(selectNewsCurrentPage);

  const [isFetching, setIsFetching] = React.useState(false);

  const screenWidth = window.screen.width;
  const limit = screenWidth > 638 ? 9 : 4;

  React.useEffect(() => {
    document.title = 'Новости';
  }, []);

  React.useEffect(() => {
    dispatch(fetchNews({ currentPage, limit }));
  }, [dispatch, currentPage, limit]);

  const handleScroll = React.useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (screenWidth <= 1126 && !isFetching && scrollTop + clientHeight === scrollHeight) {
      setIsFetching(true);
      dispatch(setCurrentPage(currentPage + 1));
      setTimeout(() => {
        setIsFetching(false);
      }, 500);
    }
  }, [currentPage, dispatch, isFetching, screenWidth]);

  React.useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <main className='news'>
      <TitleContainer name={menuItems[1].name} path='/' />
      <NewsContainer place='news' itemsArray={items} status={status} limit={limit} />
      <Pagination
        onChangePage={(page) => dispatch(setCurrentPage(page))}
        onSwitchToNextPage={() => dispatch(setCurrentPage(currentPage + 1))}
        onSwitchToPreviousPage={() => dispatch(setCurrentPage(currentPage - 1))}
        currentPage={currentPage}
      />
    </main>
  );
};

export default News;
