import React from 'react';
import './AudioPlayer.scss';
import {
  PlayButton,
  TimeCounter,
  TimelineContainer,
  VolumelineContainer,
  MoreButton,
  MoreMenu,
  SpeedParamsMenu,
} from '../../components';

type AudioPlayerProps = {
  src: string;
  screenWidth: number;
};

export type ButtonClick = MouseEvent & {
  composedPath: Node[];
};

function isTouchEvent(
  event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
): event is React.TouchEvent<HTMLDivElement> {
  return 'touches' in event;
}

function isMouseEvent(
  event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
): event is React.MouseEvent<HTMLDivElement> {
  return 'buttons' in event;
}

export const AudioPlayer = ({ src, screenWidth }: AudioPlayerProps) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const audioLinkRef = React.useRef<HTMLAnchorElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLUListElement>(null);
  const speedParamsMenuRef = React.useRef<HTMLUListElement>(null);
  const isChangeVolume = React.useRef<boolean>(false);

  const [progress, setProgress] = React.useState<number>(0);
  const [isPlaying, setPlaying] = React.useState<boolean>(false);
  const [totalDuration, setTotalDuration] = React.useState<number>(0);
  const [currentDuration, setCurrentDuration] = React.useState<number>(0);
  const [isVolumeContainerHovered, setIsVolumeContainerHovered] = React.useState<boolean>(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = React.useState<boolean>(false);
  const [isSpeedParamsOpen, setIsSpeedParamsOpen] = React.useState<boolean>(false);
  const [previousVolume, setPreviousVolume] = React.useState<number>(1);
  const [isMuted, setIsmuted] = React.useState<boolean>(false);
  const [volume, setVolume] = React.useState<number>(100);
  const [isChangeTime, setIsChangeTime] = React.useState<boolean>(false);

  const handleDishoverVolumeContainer = () => {
    setIsVolumeContainerHovered(false);
    isChangeVolume.current = false;
  };

  // const handleVolumeProgressBarDrag = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
  //   const audioPlayer = audioRef.current;

  //   if (audioPlayer) {
  //     if (isMouseEvent(event) && event.buttons !== 1) {
  //       return;
  //     }

  //     if (isTouchEvent(event)) {
  //       event.stopPropagation();
  //       event.preventDefault();
  //     }

  //     isChangeVolume.current = true;

  //     const volumelineContainer = event.currentTarget;
  //     const volumelineContainerRect = volumelineContainer.getBoundingClientRect();

  //     const clientX = isTouchEvent(event) ? event.touches[0].clientX : event.clientX;
  //     const offsetX = clientX - volumelineContainerRect.left;

  //     const newProgress = (offsetX / volumelineContainer.offsetWidth) * 100;
  //     const clampedVolume = Math.max(0, Math.min(newProgress, 100));

  //     audioPlayer.volume = clampedVolume / 100;

  //     setVolume(clampedVolume);
  //   }
  // };

  const handleVolumeProgressBarDrag = (event: React.MouseEvent<HTMLDivElement>) => {
    const audioPlayer = audioRef.current;

    if (audioPlayer) {
      if (event.buttons !== 1) {
        return;
      }

      isChangeVolume.current = true;

      const volumelineContainer = event.currentTarget;
      const volumelineContainerRect = volumelineContainer.getBoundingClientRect();
      const offsetX = event.clientX - volumelineContainerRect.left;

      const newProgress = (offsetX / volumelineContainer.offsetWidth) * 100;
      const clampedVolume = Math.max(0, Math.min(newProgress, 100));

      audioPlayer.volume = clampedVolume / 100;

      setVolume(clampedVolume);
    }
  };

  const handleProgressBarDrag = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const audioPlayer = audioRef.current;

    if (audioPlayer) {
      if ((isTouchEvent(event) && event.touches.length !== 1) || (isMouseEvent(event) && event.buttons !== 1)) {
        return;
      }

      setIsChangeTime(true);

      const timelineContainer = event.currentTarget;
      const timelineContainerRect = timelineContainer.getBoundingClientRect();

      const offsetX = isTouchEvent(event)
        ? event.touches[0].clientX - timelineContainerRect.left
        : event.clientX - timelineContainerRect.left;

      const timelineContainerWidth = timelineContainer.offsetWidth;
      const newProgress = (offsetX / timelineContainerWidth) * 100;

      setProgress(newProgress);

      const newCurrentTime = (newProgress / 100) * totalDuration;
      audioPlayer.currentTime = newCurrentTime;
    }
  };

  // const handleProgressBarDrag = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
  //   const audioPlayer = audioRef.current;

  //   if (audioPlayer) {
  //     if ((isTouchEvent(event) && event.touches.length !== 1) || (isMouseEvent(event) && event.buttons !== 1)) {
  //       return;
  //     }

  //     setIsChangeTime(true);

  //     const timelineContainer = event.currentTarget;
  //     const timelineContainerRect = timelineContainer.getBoundingClientRect();

  //     const offsetX = isTouchEvent(event)
  //       ? event.touches[0].clientX - timelineContainerRect.left
  //       : event.clientX - timelineContainerRect.left;

  //     const newProgress = (offsetX / timelineContainer.offsetWidth) * 100;

  //     setProgress(newProgress);

  //     const newCurrentTime = (newProgress / 100) * totalDuration;
  //     audioPlayer.currentTime = newCurrentTime;
  //   }
  // };

  // const handleProgressBarDrag = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
  //   const audioPlayer = audioRef.current;

  //   if (audioPlayer) {
  //     if (
  //       (event.type === 'mousemove' && 'buttons' in event && event.buttons !== 1) ||
  //       (event.type === 'touchmove' && 'touches' in event && event.touches.length !== 1)
  //     ) {
  //       return;
  //     }

  //     setIsChangeTime(true);

  //     const timelineContainer = event.currentTarget;
  //     const timelineContainerRect = timelineContainer.getBoundingClientRect();
  //     const offsetX =
  //       event.type === 'mousemove'
  //         ? (event as React.MouseEvent<HTMLDivElement>).clientX - timelineContainerRect.left
  //         : (event as React.TouchEvent<HTMLDivElement>).touches[0].clientX - timelineContainerRect.left;

  //     const newProgress = (offsetX / timelineContainer.offsetWidth) * 100;

  //     setProgress(newProgress);

  //     const newCurrentTime = (newProgress / 100) * totalDuration;
  //     audioPlayer.currentTime = newCurrentTime;
  //   }
  // };

  const handleProgressBarDragEnd = () => {
    const audioPlayer = audioRef.current;
    if (audioPlayer) {
      if (isPlaying) {
        // Если воспроизведение активно, запускаем его
        audioPlayer.play();
      }
    }
  };

  const handleMuteButtonClick = () => {
    const audioPlayer = audioRef.current;
    if (audioPlayer) {
      if (audioPlayer.volume === 0) {
        audioPlayer.volume = previousVolume; // Восстановить прежний уровень громкости
        setIsmuted(false);
      } else {
        setPreviousVolume(audioPlayer.volume); // Сохранить текущий уровень громкости
        audioPlayer.volume = 0; // Установить уровень громкости на 0
        setIsmuted(true);
      }
    }
  };

  const handleDownload = () => {
    const audioPlayerLink = audioLinkRef.current;
    if (audioPlayerLink) {
      audioPlayerLink.click(); // Запускаем скачивание аудиотрека
    }
  };

  const handleChangePlaybackSpeed = (speed: number) => {
    const audioPlayer = audioRef.current;
    if (audioPlayer) {
      audioPlayer.playbackRate = speed; // Устанавливаем выбранную скорость воспроизведения
    }
  };

  const handleOpenMoreMenu = () => {
    if (isMoreMenuOpen) {
      setIsMoreMenuOpen(false);
      setIsSpeedParamsOpen(false);
      setTimeout(() => setIsMoreMenuOpen(true), 200);
    } else {
      setIsSpeedParamsOpen(false);
      setIsMoreMenuOpen(true);
    }
  };

  const handleToggleSpeedParams = () => {
    setIsSpeedParamsOpen(!isSpeedParamsOpen);
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  const handleTimeUpdate = () => {
    const audioPlayer = audioRef.current;
    if (audioPlayer) {
      const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      setProgress(progress);

      if (progress >= 100) {
        setPlaying(false);
      }
    }
  };

  const togglePlay = () => {
    const audioPlayer = audioRef.current;
    if (audioPlayer) {
      if (isPlaying) {
        audioPlayer.pause();
      } else {
        audioPlayer.play();
      }
      setPlaying(!isPlaying);
    }
  };

  React.useEffect(() => {
    const audioPlayer = audioRef.current;
    if (audioPlayer) {
      audioPlayer.addEventListener('timeupdate', handleTimeUpdate);
      audioPlayer.addEventListener('ended', () => {
        setPlaying(false);
      });

      return () => {
        audioPlayer.removeEventListener('timeupdate', handleTimeUpdate);
        audioPlayer.removeEventListener('ended', () => {
          setPlaying(false);
        });
      };
    }
  }, []);

  React.useEffect(() => {
    const audioPlayer = audioRef.current;
    if (audioPlayer) {
      // Обработчик события timeupdate
      const updateTime = () => {
        setCurrentDuration(audioPlayer.currentTime);
      };

      // Привязка обработчика к событию timeupdate
      audioPlayer.addEventListener('timeupdate', updateTime);

      // Получение общей продолжительности трека
      const handleLoadedMetadata = () => {
        setTotalDuration(audioPlayer.duration);
      };

      audioPlayer.addEventListener('loadedmetadata', handleLoadedMetadata);

      // Отписка от событий и очистка при размонтировании компонента
      return () => {
        audioPlayer.removeEventListener('timeupdate', updateTime);
        audioPlayer.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as ButtonClick;
      if (
        buttonRef.current &&
        menuRef.current &&
        speedParamsMenuRef.current &&
        !_event.composedPath().includes(buttonRef.current) &&
        !_event.composedPath().includes(menuRef.current) &&
        !_event.composedPath().includes(speedParamsMenuRef.current)
      ) {
        setIsMoreMenuOpen(false);
        setIsSpeedParamsOpen(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className='audio-player'>
      <audio ref={audioRef} src={src}>
        Ваш браузер не поддерживает встроенное аудио. Попробуйте скачать его
        <a href={src} ref={audioLinkRef} download>
          по ссылке
        </a>
      </audio>
      <div className='audio-player__container'>
        <PlayButton onClick={togglePlay} isPlaying={isPlaying} />
        <TimeCounter currentDuration={currentDuration} totalDuration={totalDuration} />
        <TimelineContainer
          onDrag={handleProgressBarDrag}
          onDragEnd={handleProgressBarDragEnd}
          onToggleChangeTime={() => setIsChangeTime(false)}
          isVolumeContainerHovered={isVolumeContainerHovered}
          isChangeTime={isChangeTime}
          progress={progress}
          screenWidth={screenWidth}
        />
        <VolumelineContainer
          onHover={() => setIsVolumeContainerHovered(true)}
          onDisHover={() => !isChangeVolume.current && setIsVolumeContainerHovered(false)}
          onDisHoverVolumeContainer={handleDishoverVolumeContainer}
          onDrag={handleVolumeProgressBarDrag}
          onMuteButtonClick={handleMuteButtonClick}
          volume={volume}
          isVolumeContainerHovered={isVolumeContainerHovered}
          isChangeVolume={isChangeVolume.current}
          isMuted={isMuted}
          screenWidth={screenWidth}
        />
        <MoreButton onClick={handleOpenMoreMenu} ref={buttonRef} />
        <MoreMenu
          onToggleSpeedParams={handleToggleSpeedParams}
          onDownLoad={handleDownload}
          isMoreMenuOpen={isMoreMenuOpen}
          ref={menuRef}
        />
        <SpeedParamsMenu
          isSpeedParamsOpen={isSpeedParamsOpen}
          onChangePlaybackSpeed={handleChangePlaybackSpeed}
          onToggleSpeedParams={handleToggleSpeedParams}
          ref={speedParamsMenuRef}
        />
      </div>
    </div>
  );
};
