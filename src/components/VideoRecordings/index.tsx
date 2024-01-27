import React from 'react';
import './VideoRecordings.scss';
import { Link } from 'react-router-dom';
import { VideoSkeleton } from '../../components';
import { Status, Video } from '../../redux/video/types';

type VideoRecordingsProps = {
  screenWidth: number;
  videoItems: Video[];
  status: Status;
  limit: number;
};

export const VideoRecordings = ({ videoItems, screenWidth, status, limit }: VideoRecordingsProps) => {
  const videos = videoItems.map((videoItem) => (
    <li key={videoItem._id} className='video-recordings__item'>
      <iframe
        className='video-recordings__iframe'
        src={videoItem.iframeUrl}
        allowFullScreen
        title={videoItem.title}
      ></iframe>
      <Link to={`/media/${videoItem._id}`} className='video-recordings__item-link'>
        <h2 className='video-recordings__item-title'>{videoItem.title}</h2>
      </Link>
      <span className='video-recordings__item-date'>27.09.2023</span>
    </li>
  ));

  const skeletons = [...new Array(limit)].map((_, index) => (
    <li key={index}>
      <VideoSkeleton screenWidth={screenWidth} />
    </li>
  ));

  return (
    <section>
      <ul className='video-recordings'>{status === 'loading' ? skeletons : videos}</ul>
    </section>
  );
};
