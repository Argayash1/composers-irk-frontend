import React from 'react';
import { NewsContainer, TitleContainer, Pagination } from '../components';
import { useAppDispatch } from '../redux/store';
import { fetchNews } from '../redux/news/asyncActions';
import { useSelector } from 'react-redux';
import { selectNewsData } from '../redux/news/selectors';
import { setCurrentPage } from '../redux/news/slice';
import { menuItems } from '../utils/constants';
import { useResize } from '../hooks/useResize';

const News = () => {
  const dispatch = useAppDispatch();
  const { items, status, currentPage, totalPages } = useSelector(selectNewsData);

  const { screenWidth } = useResize();

  const [fetching, setFetching] = React.useState(false);

  React.useEffect(() => {
    const handleSetLimit = () => {
      let limit;

      if (screenWidth > 638) {
        limit = 9;
      } else {
        limit = 4;
      }

      return limit;
    };

    dispatch(fetchNews({ currentPage, limit: handleSetLimit(), screenWidth }));
  }, [dispatch, currentPage, screenWidth]);

  const handleScroll = React.useCallback(() => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    const scrollThreshold = 100; // Допустимая погрешность

    if (screenWidth <= 1126 && !fetching && scrollTop + clientHeight >= scrollHeight - scrollThreshold) {
      setFetching(true);
      dispatch(setCurrentPage(currentPage + 1));
      setTimeout(() => {
        setFetching(false);
      }, 500);
    }
  }, [currentPage, dispatch, fetching, screenWidth]);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <main className='news'>
      <TitleContainer name={menuItems[1].name} place='news' />
      <NewsContainer
        place='news'
        itemsArray={items}
        status={status}
        limit={screenWidth > 638 ? 9 : 4}
        screenWidth={screenWidth}
      />
      {totalPages > 1 && (
        <Pagination
          onChangePage={(page) => dispatch(setCurrentPage(page))}
          onSwitchToNextPage={() => dispatch(setCurrentPage(currentPage + 1))}
          onSwitchToPreviousPage={() => dispatch(setCurrentPage(currentPage - 1))}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </main>
  );
};

export default News;
