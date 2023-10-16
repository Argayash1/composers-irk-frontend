import React from 'react';
import { PageTitle, iFrameItems } from '../components';
import { useParams } from 'react-router-dom';

const FullVideo = () => {
  const [video, setVideo] = React.useState<{ iFrameUrl: string; title: string }>();

  const { id } = useParams();

  React.useEffect(() => {
    const videoObject = iFrameItems[Number(id)];
    setVideo(videoObject);
  }, [id]);

  if (!video) {
    return <>Загрузка видео...</>;
  }

  return (
    <div className='full-video'>
      <PageTitle name='Медиа' />
      <iframe className='full-video__iframe' src={video.iFrameUrl} allowFullScreen title={video.title}></iframe>
      <h2 className='full-video__title'>{video.title}</h2>
      <span className='full-video__date'>01.01.2023</span>
    </div>
  );
};

export default FullVideo;
