import React from 'react';
import './VideoRecordings.scss';
import { Link } from 'react-router-dom';
import { iFramesArray } from '../../utils/iframesArray';
import { VideoSkeleton } from '../../components';

type VideoRecordingsProps = {
  screenWidth: number;
};

export const VideoRecordings = ({ screenWidth }: VideoRecordingsProps) => {
  const videos = iFramesArray.map((iFrameItem) => (
    <li key={iFrameItem.id} className='video-recordings__item'>
      <iframe
        className='video-recordings__iframe'
        src={iFrameItem.iframeUrl}
        allowFullScreen
        title={iFrameItem.title}
      ></iframe>
      <Link to={`/media/${iFrameItem.id}`} className='video-recordings__item-link'>
        <h2 className='video-recordings__item-title'>{iFrameItem.title}</h2>
      </Link>
      <span className='video-recordings__item-date'>27.09.2023</span>
    </li>
  ));

  const skeletons = [...new Array(iFramesArray.length)].map((_, index) => (
    <li key={index}>
      <VideoSkeleton screenWidth={screenWidth} />
    </li>
  ));

  return <ul className='video-recordings'>{videos ? videos : skeletons}</ul>;
};
