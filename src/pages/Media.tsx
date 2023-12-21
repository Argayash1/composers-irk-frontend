import React from 'react';
import { Tabs, PageTitle, AudioRecordings, VideoRecordings, menuItems, Pagination } from '../components';

const tabNames = ['Аудиозаписи', 'Видеозаписи'];

const Media = () => {
  const [category, setCategory] = React.useState<number>(0);

  const handleChangeMediaCategory = (index: number) => {
    setCategory(index);
  };

  React.useEffect(() => {
    document.title = 'Медиа';
  }, []);

  return (
    <main className='media'>
      <PageTitle name={menuItems[5].name} place='media' />
      <Tabs tabNamesArray={tabNames} onChangeTab={handleChangeMediaCategory} value={category} />
      {category === 0 ? <AudioRecordings /> : <VideoRecordings />}
      {category === 1 && <Pagination />}
    </main>
  );
};

export default Media;
