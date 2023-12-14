import React from 'react';
import { Tabs, PageTitle, AudioRecordings, VideoRecordings, menuItems, Pagination } from '../components';

const tabNames = ['Аудиозаписи', 'Видеозаписи'];

const Media = () => {
  const [mediaCategory, setMediaCategory] = React.useState(0);

  const handleChangeMediaCategory = (index: number) => {
    setMediaCategory(index);
  };

  React.useEffect(() => {
    document.title = 'Медиа';
  }, []);

  return (
    <main className='media'>
      <PageTitle name={menuItems[5].name} />
      <Tabs tabNamesArray={tabNames} onChangeTab={handleChangeMediaCategory} value={mediaCategory} />
      {mediaCategory === 0 ? <AudioRecordings /> : <VideoRecordings />}
      {mediaCategory === 1 && <Pagination />}
    </main>
  );
};

export default Media;
