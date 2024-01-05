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

  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    document.title = 'ИООО "Союз композиторов"';
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    let timeoutId: NodeJS.Timeout;

    const delayedHandleResize = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        handleResize();
      }, 500);
    };

    window.addEventListener('resize', delayedHandleResize);

    return () => {
      window.removeEventListener('resize', delayedHandleResize);
      clearTimeout(timeoutId);
    };
  }, []);

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

    dispatch(fetchNews({ currentPage, limit: handleSetLimit(), screenWidth }));
  }, [dispatch, currentPage, screenWidth]);

  return (
    <main className='home'>
      <BrandBanner />
      <TitleContainer name={menuItems[1].name} place='main' path='/news' />
      <NewsContainer
        itemsArray={items}
        place='main'
        status={status}
        limit={screenWidth > 638 ? 6 : 3}
        screenWidth={screenWidth}
      />
    </main>
  );
};

export default Home;
