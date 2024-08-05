import React from 'react';
import { Tabs, TitleContainer, AudioRecordings, VideoRecordings, Pagination } from '../components';
import { useAppDispatch } from '../redux/store';
import { setCurrentPage } from '../redux/video/slice';
import { useSelector } from 'react-redux';
import { selectVideoData } from '../redux/video/selectors';
import clsx from 'clsx';
import { fetchAudios } from '../redux/audio/asyncActions';
import { selectAudioData } from '../redux/audio/selectors';
import { fetchVideos } from '../redux/video/asyncActions';
import { menuItems } from '../utils/constants';

const tabNames = ['Аудиозаписи', 'Видеозаписи'];

const Media = () => {
  const dispatch = useAppDispatch();
  const { items } = useSelector(selectAudioData);
  const { videoItems } = useSelector(selectVideoData);

  const { currentPage, status, totalPages } = useSelector(selectVideoData);

  const [category, setCategory] = React.useState<number>(0);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const [cardsLimit, setCardsLimit] = React.useState<number>(0);
  const [fetching, setFetching] = React.useState(false);

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

  React.useEffect(() => {
    const handleSetLimit = (): number => {
      let limit;

      if (screenWidth > 622) {
        limit = 4;
      } else {
        limit = 3;
      }

      setCardsLimit(limit);

      return limit;
    };

    if (category === 0) {
      dispatch(fetchAudios());
    } else {
      dispatch(fetchVideos({ currentPage, limit: handleSetLimit(), screenWidth }));
    }
  }, [dispatch, category, currentPage, screenWidth]);

  const handleScroll = React.useCallback(() => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    const scrollThreshold = 100; // Допустимая погрешность

    if (screenWidth <= 1126 && !fetching && scrollTop + clientHeight >= scrollHeight - scrollThreshold) {
      setFetching(true);
      dispatch(setCurrentPage(currentPage + 1));
      setTimeout(() => {
        setFetching(false);
      }, 500);
    }
  }, [currentPage, dispatch, fetching, screenWidth]);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <main className={clsx('media', category === 1 && 'media_type_video')}>
      <TitleContainer name={menuItems[5].name} place='media' value={category} />
      <section>
        <Tabs tabNamesArray={tabNames} onChangeTab={(index) => setCategory(index)} value={category} />
      </section>
      {category === 0 ? (
        <AudioRecordings screenWidth={screenWidth} audioItems={items} />
      ) : (
        <VideoRecordings screenWidth={screenWidth} videoItems={videoItems} status={status} limit={cardsLimit} />
      )}
      {category === 1 && totalPages > 1 && (
        <Pagination
          onChangePage={(page) => dispatch(setCurrentPage(page))}
          onSwitchToNextPage={() => dispatch(setCurrentPage(currentPage + 1))}
          onSwitchToPreviousPage={() => dispatch(setCurrentPage(currentPage - 1))}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </main>
  );
};

export default Media;
