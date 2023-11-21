import React from 'react';

import './AudioRecordings.scss';
import { AudioPlayer } from '../AudioPlayer';
import { audioItems } from '../../utils/audioItems';

export const AudioRecordings: React.FC = () => {
  return (
    <ul className='audio-recordings'>
      {audioItems.map((audioItem, index) => (
        <li key={index} className='audio-recordings__item'>
          <h2 className='audio-recordings__item-title'>{audioItem.title}</h2>
          <AudioPlayer src={audioItem.url} />
        </li>
      ))}
    </ul>
  );
};
