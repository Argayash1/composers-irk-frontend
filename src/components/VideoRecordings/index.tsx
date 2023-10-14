import React from 'react';
import './VideoRecordings.scss';

const iFrameItems = [
  {
    iFrameUrl: 'https://www.youtube.com/embed/GVlRhEp0fnQ',
    title: 'Концерт, посвященный памяти Иркутского композитора В. Ф. Павлова. 21.05.2000',
  },
  { iFrameUrl: 'https://www.youtube.com/embed/fPEe0s0rVd0', title: 'Авторский концерт Юрий Шуминов Ч 1' },
  {
    iFrameUrl: 'https://www.youtube.com/embed/VtxarZyujkM',
    title: 'Композитор Михаил Лапис. Баллада для контрабаса и фортепиано.',
  },
];

export const VideoRecordings = () => {
  return (
    <ul className='video-recordings'>
      {iFrameItems.map((iFrameItem, index) => (
        <li key={index} className='video-recordings__item'>
          <iframe
            className='video-recordings__iframe'
            src={iFrameItem.iFrameUrl}
            allowFullScreen
            title={iFrameItem.title}
          ></iframe>
          <h2 className='video-recordings__item-title'>{iFrameItem.title}</h2>
          <span>01.01.2023</span>
        </li>
      ))}
    </ul>
  );
};
