import React from 'react';
import './TimelineContainer.scss';

type ProgressBarStyleType = {
  width: string;
};

type TimelineContainerProps = {
  onHover: () => void;
  onDisHover: () => void;
  onDragStart: () => void;
  onDrag: (event: React.MouseEvent<HTMLDivElement>) => void;
  onDragEnd: () => void;
  isHovered: boolean;
  progressBarStyle: ProgressBarStyleType;
};

export const TimelineContainer = React.forwardRef<HTMLDivElement, TimelineContainerProps>((props, ref) => {
  const { onHover, onDisHover, onDragStart, onDrag, onDragEnd, isHovered, progressBarStyle } = props;

  return (
    <div
      className='timeline-container'
      onMouseEnter={onHover}
      onMouseLeave={onDisHover}
      onMouseDown={onDragStart}
      onMouseMove={onDrag}
      onMouseUp={onDragEnd}
    >
      <div className='timeline-container__progress-bar-container'>
        <div
          className='timeline-container__progress-bar'
          ref={ref}
          style={progressBarStyle}
          onMouseDown={onDragStart}
        ></div>
        <button
          className={`timeline-container__progress-bar-button ${
            isHovered ? 'timeline-container__progress-bar-button_active' : ''
          }`}
        ></button>
      </div>
      <div className='timeline-container__timeline'></div>
    </div>
  );
});
