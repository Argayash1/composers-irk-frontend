import React from 'react';
import { PageTitle, Tabs } from '../components';

const tabNames = ['Все ноты', 'Вокал', 'Фортепиано'];

const Scores: React.FC = () => {
  const [scoreCategory, setScoreCategory] = React.useState(0);

  const handleChangeScoreCategory = (index: number) => {
    setScoreCategory(index);
  };

  React.useEffect(() => {
    document.title = 'Ноты';
  }, []);

  return (
    <div className='scores'>
      <PageTitle name='Ноты' />
      <Tabs tabNamesArray={tabNames} onChangeTab={handleChangeScoreCategory} value={scoreCategory} />
    </div>
  );
};

export default Scores;
