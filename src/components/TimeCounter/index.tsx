import React from 'react';
import './TimeCounter.scss';
import { handleChangeSecondsToMinutesAndSeconds } from '../../utils/utils';

type TimeCounterProps = {
  currentDuration: number;
  totalDuration: number;
};

export const TimeCounter = ({ currentDuration, totalDuration }: TimeCounterProps) => {
  return (
    <span className='time-counter'>
      {handleChangeSecondsToMinutesAndSeconds(currentDuration)}/{handleChangeSecondsToMinutesAndSeconds(totalDuration)}
    </span>
  );
};
