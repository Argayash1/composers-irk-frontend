import React from 'react';
import { NewsContainer, OurHistory, TitleContainer, Pagination, Tabs, menuItems } from '../components';

const tabNames = ['СМИ о нас', 'Наша история'];

export const AboutUs = () => {
  const [category, setCategory] = React.useState<number>(0);

  const handleChangeCategory = (index: number) => {
    setCategory(index);
  };

  React.useEffect(() => {
    document.title = 'Про нас';
  }, []);

  return (
    <main className='about-us'>
      <TitleContainer name={menuItems[7].name} place='aboutus' path='/' />
      <Tabs tabNamesArray={tabNames} onChangeTab={handleChangeCategory} value={category} />
      {category === 0 ? <NewsContainer place='aboutus' /> : <OurHistory />}
      {category === 0 && <Pagination />}
    </main>
  );
};

export default AboutUs;
