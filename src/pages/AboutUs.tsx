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

  const handleChangeCategory = (index: number) => {
    setCategory(index);
  };

  const screenWidth = window.screen.width;
  const limit = screenWidth > 638 ? 6 : 4;
  const firstItem = currentPage * limit - limit;
  const lastItam = currentPage * limit;

  const articles = articlesArray.slice(firstItem, lastItam);

  React.useEffect(() => {
    document.title = 'Про нас';
  }, []);

  return (
    <main className='about-us'>
      <TitleContainer name={menuItems[7].name} place='aboutus' path='/' />
      <Tabs tabNamesArray={tabNames} onChangeTab={handleChangeCategory} value={category} />
      {category === 0 ? <NewsContainer place='aboutus' itemsArray={articles} /> : <OurHistory />}
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
