import React from 'react';
import { FullVideoSkeleton, TitleContainer } from '../components';
import { useParams } from 'react-router-dom';
import { iFramesArray } from '../utils/iframesArray';

const FullVideo = () => {
  const [video, setVideo] = React.useState<{ iframeUrl: string; title: string }>();

  const { id } = useParams();

  React.useEffect(() => {
    const videoObject = iFramesArray[Number(id)];
    setVideo(videoObject);
  }, [id]);

  if (!video) {
    return <FullVideoSkeleton />;
  }

  return (
    <main className='full-video'>
      <TitleContainer name='Медиа' place='full-video' path='/media' />
      <section className='full-video__main-content'>
        <iframe className='full-video__iframe' src={video.iframeUrl} allowFullScreen title={video.title}></iframe>
        <h2 className='full-video__title'>{video.title}</h2>
        <span className='full-video__date'>27.09.2023</span>
        <p className='full-video__description'>Описание</p>
      </section>
    </main>
  );
};

export default FullVideo;
