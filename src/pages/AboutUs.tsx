import React from 'react';
import { NewsContainer, OurHistory, PageTitle, Pagination, Tabs, menuItems } from '../components';

const tabNames = ['СМИ о нас', 'Наша история'];

export const AboutUs = () => {
  const [category, setCategory] = React.useState(0);

  const handleChangeCategory = (index: number) => {
    setCategory(index);
  };

  React.useEffect(() => {
    document.title = 'Про нас';
  }, []);

  return (
    <main className='about-us'>
      <PageTitle name={menuItems[7].name} />
      <Tabs tabNamesArray={tabNames} onChangeTab={handleChangeCategory} value={category} />
      {category === 0 ? <NewsContainer place='aboutus' /> : <OurHistory />}
      {category === 0 && <Pagination />}
    </main>
  );
};

export default AboutUs;
