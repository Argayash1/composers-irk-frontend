import React from 'react';
import './TimeCounter.scss';
import { handleChangeSecondsToMinutesAndSeconds } from '../../utils/utils';

type TimeCounterProps = {
  currentDuration: number;
  totalDuration: number;
};

export const TimeCounter: React.FC<TimeCounterProps> = ({ currentDuration, totalDuration }) => {
  return (
    <span className='audio-player__time-counter'>
      {handleChangeSecondsToMinutesAndSeconds(currentDuration)}/{handleChangeSecondsToMinutesAndSeconds(totalDuration)}
    </span>
  );
};
