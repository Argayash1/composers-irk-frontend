import React from 'react';
import { VolumeButton } from '../VolumeButton';
import { ProgressBarStyleType } from '../TimelineContainer';
import './VolumelineContainer.scss';

type VolumelineContainerProps = {
  onHover: () => void;
  onDisHover: () => void;
  onVolumeLineHover: () => void;
  onVolumeLineDisHover: () => void;
  onDrag: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMuteButtonClick: () => void;
  volumeProgressBarStyle: ProgressBarStyleType;
  isVolumeContainerHovered: boolean;
  isVolumeLineHovered: boolean;
  isChangeVolume: boolean;
  isMuted: boolean;
};

export const VolumelineContainer = React.forwardRef<HTMLDivElement, VolumelineContainerProps>((props, ref) => {
  const {
    onHover,
    onDisHover,
    onVolumeLineHover,
    onVolumeLineDisHover,
    onDrag,
    onMuteButtonClick,
    volumeProgressBarStyle,
    isVolumeContainerHovered,
    isVolumeLineHovered,
    isChangeVolume,
    isMuted,
  } = props;

  return (
    <div className='volumeline-container' onMouseEnter={onHover} onMouseLeave={onDisHover} ref={ref}>
      <div
        className={`volumeline-container__volumeline-wrapper ${
          isVolumeContainerHovered ? 'volumeline-container__volumeline-wrapper_hovered' : ''
        }`}
        onMouseEnter={onVolumeLineHover}
        onMouseLeave={onVolumeLineDisHover}
        onMouseMove={onDrag}
      >
        <div className='volumeline-container__progress-bar-container'>
          <div
            className={`volumeline-container__progress-bar ${
              isChangeVolume ? 'volumeline-container__progress-bar_animation_inactive' : ''
            }`}
            style={volumeProgressBarStyle}
          ></div>
          <button
            className={`volumeline-container__progress-bar-button ${
              isVolumeLineHovered ? 'volumeline-container__progress-bar-button_active' : ''
            }`}
          ></button>
        </div>
        <div
          className={`volumeline-container__volumeline ${
            isVolumeContainerHovered ? 'volumeline-container__volumeline_hovered' : ''
          }`}
        ></div>
      </div>

      <VolumeButton onClick={onMuteButtonClick} isMuted={isMuted} />
    </div>
  );
});
