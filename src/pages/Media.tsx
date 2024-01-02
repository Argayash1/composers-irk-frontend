import React from 'react';
import { Tabs, TitleContainer, AudioRecordings, VideoRecordings, menuItems, Pagination } from '../components';
import { useAppDispatch } from '../redux/store';
import { setCurrentPage } from '../redux/video/slice';
import { useSelector } from 'react-redux';
import { selectVideoCurrentPage } from '../redux/video/selectors';

const tabNames = ['Аудиозаписи', 'Видеозаписи'];

const Media = () => {
  const dispatch = useAppDispatch();
  const currentPage = useSelector(selectVideoCurrentPage);

  const [category, setCategory] = React.useState<number>(0);

  const handleChangeMediaCategory = (index: number) => {
    setCategory(index);
  };

  React.useEffect(() => {
    document.title = 'Медиа';
  }, []);

  return (
    <main className='media'>
      <TitleContainer name={menuItems[5].name} place='media' path='/' />
      <Tabs tabNamesArray={tabNames} onChangeTab={handleChangeMediaCategory} value={category} />
      {category === 0 ? <AudioRecordings /> : <VideoRecordings />}
      {category === 1 && (
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

export default Media;
