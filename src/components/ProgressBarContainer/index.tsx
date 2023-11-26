import React from 'react';
import './ProgressBarContainer.scss';
import { ProgressBarStyleType } from '../TimelineContainer';

type ProgressBarContainerProps = {
  isChangeVolume?: boolean;
  progressBarStyle: ProgressBarStyleType;
  isLineHovered: boolean;
  type?: string;
};

export const ProgressBarContainer: React.FC<ProgressBarContainerProps> = ({
  isChangeVolume,
  progressBarStyle,
  isLineHovered,
  type,
}) => {
  return (
    <div className='progress-bar-container'>
      <div
        className={`progress-bar-container__progress-bar ${
          type === 'volume' && !isChangeVolume ? 'progress-bar-container__progress-bar_animation_active' : ''
        }`}
        style={progressBarStyle}
      ></div>
      <button
        className={`progress-bar-container__progress-bar-button ${
          isLineHovered ? 'progress-bar-container__progress-bar-button_active' : ''
        }`}
      ></button>
    </div>
  );
};
