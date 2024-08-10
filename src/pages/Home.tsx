import React from 'react';
import { BrandBanner, Errorblock, NewsContainer, TitleContainer } from '../components';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { selectNewsData } from '../redux/news/selectors';
import { fetchNews } from '../redux/news/asyncActions';
import { menuItems } from '../utils/constants';
import { useResize } from '../hooks/useResize';

const Home = () => {
  const dispatch = useAppDispatch();

  const { items, status } = useSelector(selectNewsData);

  const { screenWidth } = useResize();

  React.useEffect(() => {
    const handleSetLimit = () => {
      let limit;

      if (screenWidth > 638) {
        limit = 6;
      } else {
        limit = 3;
      }

      return limit;
    };

    dispatch(fetchNews({ currentPage: 1, limit: handleSetLimit(), screenWidth }));
  }, [dispatch, screenWidth]);

  return (
    <main className='home'>
      <BrandBanner />
      <TitleContainer name={menuItems[1].name} place='main' path='/news' />
      {status === 'error' ? (
        <Errorblock />
      ) : (
        <NewsContainer
          itemsArray={items}
          place='main'
          status={status}
          limit={screenWidth > 638 ? 6 : 3}
          screenWidth={screenWidth}
        />
      )}
    </main>
  );
};

export default Home;
