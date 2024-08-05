import React from 'react';
import { NewsContainer, TitleContainer, Pagination, Tabs, TextContent } from '../components';
import { useSelector } from 'react-redux';
import { selectArticleData } from '../redux/article/selectors';
import { useAppDispatch } from '../redux/store';
import { setCurrentPage } from '../redux/article/slice';
import clsx from 'clsx';
import { fetchArticles } from '../redux/article/asyncActions';
import { fetchourHistory } from '../redux/ourHistory/asyncActions';
import { selectOurHistoryData } from '../redux/ourHistory/selectors';
import { menuItems } from '../utils/constants';

const tabNames = ['СМИ о нас', 'Наша история'];

export const AboutUs = () => {
  const dispatch = useAppDispatch();

  const { currentPage, totalPages, items, status } = useSelector(selectArticleData);
  const { historyItem, historyStatus } = useSelector(selectOurHistoryData);

  const [category, setCategory] = React.useState<number>(0);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const [cardsLimit, setCardsLimit] = React.useState<number>(0);
  const [fetching, setFetching] = React.useState(false);

  React.useEffect(() => {
    document.title = 'Про нас';
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
    const handleSetLimit = (): number => {
      let limit;

      if (screenWidth > 622) {
        limit = 6;
      } else {
        limit = 3;
      }

      setCardsLimit(limit);

      return limit;
    };

    if (category === 0) {
      dispatch(fetchArticles({ currentPage, limit: handleSetLimit(), screenWidth }));
    } else {
      dispatch(fetchourHistory());
    }
  }, [dispatch, category, currentPage, screenWidth]);

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
    <main className={clsx('about-us', category === 1 && 'about-us_type_our-histpry')}>
      <TitleContainer name={menuItems[7].name} place='aboutus' value={category} />
      <section>
        <Tabs tabNamesArray={tabNames} onChangeTab={(index) => setCategory(index)} value={category} />
      </section>
      {category === 0 ? (
        <NewsContainer
          place='aboutus'
          itemsArray={items}
          screenWidth={screenWidth}
          limit={screenWidth > 638 ? 6 : 4}
          status={status}
        />
      ) : (
        <section>
          <TextContent text={historyItem.text} place='about-us' />
        </section>
      )}
      {category === 0 && totalPages > 1 && (
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

export default AboutUs;
