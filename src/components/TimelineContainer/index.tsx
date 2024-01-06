import React from 'react';
import './TimelineContainer.scss';
import { ProgressBarContainer } from '../ProgressBarContainer';
import { ButtonClick } from '../AudioPlayer';

type TimelineContainerProps = {
  onDrag: (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => void;
  onDragEnd: () => void;
  onToggleChangeTime: () => void;
  isVolumeContainerHovered: boolean;
  isChangeTime: boolean;
  progress: number;
};

export const TimelineContainer = ({
  onDrag,
  onDragEnd,
  onToggleChangeTime,
  isVolumeContainerHovered,
  isChangeTime,
  progress,
}: TimelineContainerProps) => {
  const timeLineRef = React.useRef<HTMLDivElement>(null);

  const [isTimelineContainerHovered, setIsTimelineContainerHovered] = React.useState<boolean>(false);

  const screenWidth = window.screen.width;
  const fullProgressBarWidth =
    screenWidth > 810 ? 521 : screenWidth <= 810 && screenWidth > 612 ? 334 : screenWidth <= 612 ? 91 : 0;
  const smallProgressBarWidth =
    screenWidth > 810 ? 390 : screenWidth <= 810 && screenWidth > 612 ? 250 : screenWidth <= 612 ? 68 : 0;
  const maxProgressBarWidth = !isVolumeContainerHovered ? fullProgressBarWidth : smallProgressBarWidth; // Максимальная ширина полосы воспроизведения
  const progressBarWidth = progress * (maxProgressBarWidth / 100); // Вычисление ширины полосы воспроизведения с учетом прогресса
  const progressBarStyle = { width: `${progressBarWidth}px` }; // Стиль с новой шириной

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as ButtonClick;
      if (timeLineRef.current && !_event.composedPath().includes(timeLineRef.current)) {
        setIsTimelineContainerHovered(false);
        onToggleChangeTime();
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, [onToggleChangeTime]);

  return (
    <div
      className={`timeline-container ${
        isVolumeContainerHovered ? 'timeline-container_width_volumeline-container-hover' : ''
      }`}
      onMouseEnter={() => setIsTimelineContainerHovered(true)}
      onMouseLeave={() => !isChangeTime && setIsTimelineContainerHovered(false)}
      // onTouchMove={onDrag}
      onMouseMove={onDrag}
      onTouchMove={onDrag}
      onMouseUp={onDragEnd}
      ref={timeLineRef}
    >
      <ProgressBarContainer progressBarStyle={progressBarStyle} isLineHovered={isTimelineContainerHovered} />
      <div className='timeline-container__timeline'></div>
    </div>
  );
};
