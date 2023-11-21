import React from 'react';
import { PageTitle } from '../components';
import { useParams } from 'react-router-dom';
import { iFramesArray } from '../utils/iframesArray';

const FullVideo: React.FC = () => {
  const [video, setVideo] = React.useState<{ iFrameUrl: string; title: string }>();

  const { id } = useParams();

  React.useEffect(() => {
    const videoObject = iFramesArray[Number(id)];
    setVideo(videoObject);
  }, [id]);

  if (!video) {
    return <>Загрузка видео...</>;
  }

  return (
    <main className='full-video'>
      <PageTitle name='Медиа' />
      <iframe className='full-video__iframe' src={video.iFrameUrl} allowFullScreen title={video.title}></iframe>
      <h2 className='full-video__title'>{video.title}</h2>
      <span className='full-video__date'>01.01.2023</span>
      <p className='full-video__description'>Описание</p>
    </main>
  );
};

export default FullVideo;