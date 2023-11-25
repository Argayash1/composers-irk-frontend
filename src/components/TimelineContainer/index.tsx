import React from 'react';
import './TimelineContainer.scss';
import { ProgressBarContainer } from '../ProgressBarContainer';

export type ProgressBarStyleType = {
  width: string;
};

type TimelineContainerProps = {
  onHover: () => void;
  onDisHover: () => void;
  onDrag: (event: React.MouseEvent<HTMLDivElement>) => void;
  onDragEnd: () => void;
  isHovered: boolean;
  isVolumeContainerHovered: boolean;
  progressBarStyle: ProgressBarStyleType;
};

export const TimelineContainer = React.forwardRef<HTMLDivElement, TimelineContainerProps>((props, ref) => {
  const { onHover, onDisHover, onDrag, onDragEnd, isHovered, isVolumeContainerHovered, progressBarStyle } = props;
  return (
    <div
      className={`timeline-container ${
        isVolumeContainerHovered ? 'timeline-container_width_volumeline-container-hover' : ''
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onDisHover}
      onMouseMove={onDrag}
      onMouseUp={onDragEnd}
      ref={ref}
    >
      <ProgressBarContainer progressBarStyle={progressBarStyle} isLineHovered={isHovered} />
      <div className='timeline-container__timeline'></div>
    </div>
  );
});
