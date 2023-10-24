import React from 'react';
import { OurHistory, PageTitle, Tabs } from '../components';

const tabNames = ['СМИ о нас', 'Наша история'];

export const AboutUs: React.FC = () => {
  const [category, setCategory] = React.useState(0);

  const handleChangeCategory = (index: number) => {
    setCategory(index);
  };

  React.useEffect(() => {
    document.title = 'Про нас';
  }, []);

  return (
    <main className='about-us'>
      <PageTitle name='Про нас' />
      <Tabs tabNamesArray={tabNames} onChangeTab={handleChangeCategory} value={category} />
      {category === 1 && <OurHistory />}
    </main>
  );
};

export default AboutUs;
