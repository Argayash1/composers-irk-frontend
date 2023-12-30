import React from 'react';
import { NewsContainer, OurHistory, TitleContainer, Pagination, Tabs, menuItems } from '../components';
import { useSelector } from 'react-redux';
import { selectCurrentPage } from '../redux/searchSlice/selectors';
import { articlesArray } from '../utils/articlesArray';

const tabNames = ['СМИ о нас', 'Наша история'];

export const AboutUs = () => {
  const currentPage = useSelector(selectCurrentPage);

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
      {category === 0 ? <NewsContainer place='aboutus' itemsArray={articles} limit={limit} /> : <OurHistory />}
      {category === 0 && <Pagination />}
    </main>
  );
};

export default AboutUs;
