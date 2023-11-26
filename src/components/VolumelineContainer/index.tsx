import React from 'react';
import { VolumeButton } from '../VolumeButton';
import { ProgressBarStyleType } from '../TimelineContainer';
import './VolumelineContainer.scss';
import { ProgressBarContainer } from '../ProgressBarContainer';
import { ButtonClick } from '../AudioPlayer';

type VolumelineContainerProps = {
  onHover: () => void;
  onDisHover: () => void;
  onDisHoverVolumeContainer: () => void;
  onDrag: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMuteButtonClick: () => void;
  volumeProgressBarStyle: ProgressBarStyleType;
  isVolumeContainerHovered: boolean;
  isChangeVolume: boolean;
  isMuted: boolean;
};

export const VolumelineContainer: React.FC<VolumelineContainerProps> = ({
  onHover,
  onDisHover,
  onDisHoverVolumeContainer,
  onDrag,
  onMuteButtonClick,
  volumeProgressBarStyle,
  isVolumeContainerHovered,
  isChangeVolume,
  isMuted,
}) => {
  const volumeRef = React.useRef<HTMLDivElement>(null);

  const [isVolumeLineHovered, setIsVolumeLineHovered] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as ButtonClick;
      if (volumeRef.current && !_event.composedPath().includes(volumeRef.current)) {
        setIsVolumeLineHovered(false);
        onDisHoverVolumeContainer();
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, [onDisHoverVolumeContainer]);

  return (
    <div className='volumeline-container' onMouseEnter={onHover} onMouseLeave={onDisHover} ref={volumeRef}>
      <div
        className={`volumeline-container__volumeline-wrapper ${
          isVolumeContainerHovered ? 'volumeline-container__volumeline-wrapper_hovered' : ''
        }`}
        onMouseEnter={() => setIsVolumeLineHovered(true)}
        onMouseLeave={() => !isChangeVolume && setIsVolumeLineHovered(false)}
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
};
