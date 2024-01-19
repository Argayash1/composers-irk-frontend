import React from 'react';
import { Tabs, TitleContainer, AudioRecordings, VideoRecordings, menuItems, Pagination } from '../components';
import { useAppDispatch } from '../redux/store';
import { setCurrentPage } from '../redux/video/slice';
import { useSelector } from 'react-redux';
import { selectVideoCurrentPage } from '../redux/video/selectors';
import clsx from 'clsx';

const tabNames = ['Аудиозаписи', 'Видеозаписи'];

const Media = () => {
  const dispatch = useAppDispatch();
  const currentPage = useSelector(selectVideoCurrentPage);

  const [category, setCategory] = React.useState<number>(0);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    document.title = 'Медиа';
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
      }, 300);
    };

    window.addEventListener('resize', delayedHandleResize);

    return () => {
      window.removeEventListener('resize', delayedHandleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <main className={clsx('media', category === 1 && 'media_type_video')}>
      <TitleContainer name={menuItems[5].name} place='media' />
      <Tabs tabNamesArray={tabNames} onChangeTab={(index) => setCategory(index)} value={category} />
      {category === 0 ? <AudioRecordings screenWidth={screenWidth} /> : <VideoRecordings screenWidth={screenWidth} />}
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
