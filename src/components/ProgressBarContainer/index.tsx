import React from 'react';
import './ProgressBarContainer.scss';

type ProgressBarStyleType = {
  width: string;
};

type ProgressBarContainerProps = {
  isChangeVolume?: boolean;
  progressBarStyle: ProgressBarStyleType;
  isLineHovered: boolean;
  type?: string;
};

export const ProgressBarContainer = ({
  isChangeVolume,
  progressBarStyle,
  isLineHovered,
  type,
}: ProgressBarContainerProps) => {
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
