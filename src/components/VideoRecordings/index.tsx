import React from 'react';
import './VideoRecordings.scss';
import { Link } from 'react-router-dom';
import { iFramesArray } from '../../utils/iframesArray';

export const VideoRecordings: React.FC = () => {
  return (
    <ul className='video-recordings'>
      {iFramesArray.map((iFrameItem) => (
        <li key={iFrameItem.id} className='video-recordings__item'>
          <iframe
            className='video-recordings__iframe'
            src={iFrameItem.iFrameUrl}
            allowFullScreen
            title={iFrameItem.title}
          ></iframe>
          <Link to={`/media/${iFrameItem.id}`} className='video-recordings__item-link'>
            <h2 className='video-recordings__item-title'>{iFrameItem.title}</h2>
          </Link>
          <span>01.01.2023</span>
        </li>
      ))}
    </ul>
  );
};
