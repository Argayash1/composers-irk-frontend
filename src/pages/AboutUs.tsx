import React from 'react';
import { NewsContainer, OurHistory, TitleContainer, Pagination, Tabs, menuItems } from '../components';
import { useSelector } from 'react-redux';
import { articlesArray } from '../utils/articlesArray';
import { selectArticleCurrentPage } from '../redux/article/selectors';
import { useAppDispatch } from '../redux/store';
import { setCurrentPage } from '../redux/article/slice';

const tabNames = ['СМИ о нас', 'Наша история'];

export const AboutUs = () => {
  const dispatch = useAppDispatch();

  const currentPage = useSelector(selectArticleCurrentPage);

  const [category, setCategory] = React.useState<number>(0);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  const handleChangeCategory = (index: number) => {
    setCategory(index);
  };

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
    <main className='about-us'>
      <TitleContainer name={menuItems[7].name} place='aboutus' path='/' />
      <Tabs tabNamesArray={tabNames} onChangeTab={handleChangeCategory} value={category} />
      {category === 0 ? (
        <NewsContainer place='aboutus' itemsArray={articles} screenWidth={screenWidth} />
      ) : (
        <OurHistory />
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
