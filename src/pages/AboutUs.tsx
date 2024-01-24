import React from 'react';
import { NewsContainer, TitleContainer, Pagination, Tabs, TextContent, menuItems } from '../components';
import { useSelector } from 'react-redux';
import { articlesArray } from '../utils/articlesArray';
import { selectArticleCurrentPage } from '../redux/article/selectors';
import { useAppDispatch } from '../redux/store';
import { setCurrentPage } from '../redux/article/slice';
import clsx from 'clsx';
import {} from '../components/TextContent';
import { historyArray } from '../utils/historyArray';

const tabNames = ['СМИ о нас', 'Наша история'];

export const AboutUs = () => {
  const dispatch = useAppDispatch();

  const currentPage = useSelector(selectArticleCurrentPage);

  const [category, setCategory] = React.useState<number>(0);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

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

  const limit = screenWidth > 638 ? 6 : 4;
  const firstItem = currentPage * limit - limit;
  const lastItam = currentPage * limit;

  const articles = articlesArray.slice(firstItem, lastItam);

  return (
    <main className={clsx('about-us', category === 1 && 'about-us_type_our-histpry')}>
      <TitleContainer name={menuItems[7].name} place='aboutus' value={category} />
      <section>
        <Tabs tabNamesArray={tabNames} onChangeTab={(index) => setCategory(index)} value={category} />
      </section>
      {category === 0 ? (
        <NewsContainer
          place='aboutus'
          itemsArray={articles}
          screenWidth={screenWidth}
          limit={screenWidth > 638 ? 6 : 4}
        />
      ) : (
        <section>
          <TextContent textArray={historyArray} place='about-us' />
        </section>
      )}
      {category === 0 && (
        <Pagination
          onChangePage={(page) => dispatch(setCurrentPage(page))}
          onSwitchToNextPage={() => dispatch(setCurrentPage(currentPage + 1))}
          onSwitchToPreviousPage={() => dispatch(setCurrentPage(currentPage - 1))}
          currentPage={currentPage}
        />
      )}
    </main>
  );
};

export default AboutUs;
