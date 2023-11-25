import React from 'react';
import { VolumeButton } from '../VolumeButton';
import { ProgressBarStyleType } from '../TimelineContainer';
import './VolumelineContainer.scss';
import { ProgressBarContainer } from '../ProgressBarContainer';

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
        <ProgressBarContainer
          progressBarStyle={volumeProgressBarStyle}
          isChangeVolume={isChangeVolume}
          isLineHovered={isVolumeLineHovered}
          type='volume'
        />
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
