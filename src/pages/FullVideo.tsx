import React from 'react';
import { FullVideoSkeleton, TitleContainer } from '../components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectVideoData } from '../redux/video/selectors';
import { fetchVideoById } from '../redux/video/asyncActions';
import { useAppDispatch } from '../redux/store';
import { handleFormateDate } from '../utils/utils';

const FullVideo = () => {
  const dispatch = useAppDispatch();
  const { videoItem, status } = useSelector(selectVideoData);

  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      dispatch(fetchVideoById(id));
    }
  }, [id, dispatch]);

  if (status === 'loading') {
    return <FullVideoSkeleton />;
  }

  return (
    <main className='full-video'>
      <TitleContainer name='Медиа' place='full-video' path='/media' />
      <section className='full-video__main-content'>
        <iframe
          className='full-video__iframe'
          src={videoItem.iframeUrl}
          allowFullScreen
          title={videoItem.title}
        ></iframe>
        <h2 className='full-video__title'>{videoItem.title}</h2>
        <span className='full-video__date'>{handleFormateDate(videoItem.createdAt)}</span>
        <p className='full-video__description'>{videoItem.about}</p>
      </section>
    </main>
  );
};

export default FullVideo;
