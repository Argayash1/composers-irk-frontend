import React from 'react';

import './AudioRecordings.scss';
import { AudioPlayer } from '../AudioPlayer';
import { audioItems } from '../../utils/audioItems';

type AudioRecordingsProps = {
  screenWidth: number;
};

export const AudioRecordings = ({ screenWidth }: AudioRecordingsProps) => {
  return (
    <ul className='audio-recordings'>
      {audioItems.map((audioItem, index) => (
        <li key={index} className='audio-recordings__item'>
          <h2 className='audio-recordings__item-title'>
            {audioItem.composer + ' ' + audioItem.title + ' ' + audioItem.performer}
          </h2>
          <AudioPlayer src={audioItem.audioUrl} screenWidth={screenWidth} />
        </li>
      ))}
    </ul>
  );
};
