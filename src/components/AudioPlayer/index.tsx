import React from 'react';
import './AudioPlayer.scss';
import {
  PlayButton,
  TimeCounter,
  TimelineContainer,
  VolumelineContainer,
  MoreButton,
  MoreMenu,
} from '../../components';
import downloadIcon from '../../assets/icons/more-menu-download-icon.svg';
import speedIcon from '../../assets/icons/more-menu-speed-icon.svg';

type AudioPlayerProps = {
  src: string;
};

type ButtonClick = MouseEvent & {
  composedPath: Node[];
};

export type MenuItem = {
  name: string;
  onClick: () => void;
  icon: string;
};

export type ParamsMenuItem = {
  name: string;
  onClick: () => void;
};

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const audioLinkRef = React.useRef<HTMLAnchorElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const volumeRef = React.useRef<HTMLDivElement>(null);
  const timeLineRef = React.useRef<HTMLDivElement>(null);
  const isChangeVolume = React.useRef<boolean>(false);
  const isChangeTime = React.useRef<boolean>(false);

  const [progress, setProgress] = React.useState<number>(0);
  const [isPlaying, setPlaying] = React.useState<boolean>(false);
  const [totalDuration, setTotalDuration] = React.useState<number>(0);
  const [isTimelineContainerHovered, setIsTimelineContainerHovered] = React.useState<boolean>(false);
  const [currentDuration, setCurrentDuration] = React.useState<number>(0);
  const [isVolumeLineHovered, setIsVolumeLineHovered] = React.useState<boolean>(false);
  const [isVolumeContainerHovered, setIsVolumeContainerHovered] = React.useState<boolean>(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = React.useState<boolean>(false);
  const [isSpeedParamsOpen, setIsSpeedParamsOpen] = React.useState<boolean>(false);
  const [previousVolume, setPreviousVolume] = React.useState<number>(1);
  const [isMuted, setIsmuted] = React.useState<boolean>(false);
  const [volume, setVolume] = React.useState<number>(100);

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

  const handleProgressBarDrag = (event: React.MouseEvent<HTMLDivElement>) => {
    const audioPlayer = audioRef.current;
    // Получаем информацию о положении курсора относительно полосы времени
    if (audioPlayer) {
      if (event.buttons !== 1) {
        return;
      }

      isChangeTime.current = true;

      const timelineContainer = event.currentTarget;
      const timelineContainerRect = timelineContainer.getBoundingClientRect();
      const offsetX = event.clientX - timelineContainerRect.left;

      // Вычисляем новый прогресс воспроизведения на основе смещения
      const newProgress = (offsetX / timelineContainer.offsetWidth) * 100;

      // Устанавливаем новый прогресс воспроизведения и обновляем полосу прогресса
      setProgress(newProgress);

      // Вычисляем новую позицию текущего времени на основе нового прогресса
      const newCurrentTime = (newProgress / 100) * totalDuration;
      audioPlayer.currentTime = newCurrentTime;
    }
  };

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

  const handleToggleSpeedParams = () => {
    setIsSpeedParamsOpen(!isSpeedParamsOpen);
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
        !_event.composedPath().includes(buttonRef.current) &&
        !_event.composedPath().includes(menuRef.current)
      ) {
        setIsMoreMenuOpen(false);
        setIsSpeedParamsOpen(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as ButtonClick;
      if (volumeRef.current && !_event.composedPath().includes(volumeRef.current)) {
        setIsVolumeContainerHovered(false);
        setIsVolumeLineHovered(false);
        isChangeVolume.current = false;
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as ButtonClick;
      if (timeLineRef.current && !_event.composedPath().includes(timeLineRef.current)) {
        setIsTimelineContainerHovered(false);
        isChangeTime.current = false;
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  const maxProgressBarWidth = !isVolumeContainerHovered ? 521 : 390; // Максимальная ширина полосы воспроизведения
  const progressBarWidth = progress * (maxProgressBarWidth / 100); // Вычисление ширины полосы воспроизведения с учетом прогресса
  const progressBarStyle = { width: `${progressBarWidth}px` }; // Стиль с новой шириной

  const maxVolumeProgressBarWidth = 110;
  const volumeProgressBarWidth = volume * (maxVolumeProgressBarWidth / 100); // Вычисление ширины полосы воспроизведения с учетом прогресса
  const volumeProgressBarStyle = !isVolumeContainerHovered ? { width: '0' } : { width: `${volumeProgressBarWidth}px` }; // Стиль с новой шириной

  const menuItems: MenuItem[] = [
    {
      name: 'Скачать',
      onClick: handleDownload,
      icon: downloadIcon,
    },
    {
      name: 'Скорость воспроизведения',
      onClick: handleToggleSpeedParams,
      icon: speedIcon,
    },
  ];

  const paramsMenuItems: ParamsMenuItem[] = [
    { name: 'Параметры', onClick: handleToggleSpeedParams },
    { name: '0,25', onClick: () => handleChangePlaybackSpeed(0.25) },
    { name: '0,5', onClick: () => handleChangePlaybackSpeed(0.5) },
    { name: '0,75', onClick: () => handleChangePlaybackSpeed(0.75) },
    { name: 'Обычный', onClick: () => handleChangePlaybackSpeed(1) },
    { name: '1,25', onClick: () => handleChangePlaybackSpeed(1.25) },
    { name: '1,5', onClick: () => handleChangePlaybackSpeed(1.5) },
    { name: '1,75', onClick: () => handleChangePlaybackSpeed(1.75) },
    { name: '2', onClick: () => handleChangePlaybackSpeed(2) },
  ];

  return (
    <div className='audio-player'>
      <audio className='audio-player__item-audio' ref={audioRef} src={src}>
        Ваш браузер не поддерживает встроенное аудио. Попробуйте скачать его
        <a href={src} ref={audioLinkRef} download>
          по ссылке
        </a>
      </audio>
      <div className='audio-player__container'>
        <PlayButton onClick={togglePlay} isPlaying={isPlaying} />
        <TimeCounter currentDuration={currentDuration} totalDuration={totalDuration} />
        <TimelineContainer
          onHover={() => setIsTimelineContainerHovered(true)}
          onDisHover={() => !isChangeTime.current && setIsTimelineContainerHovered(false)}
          onDrag={handleProgressBarDrag}
          onDragEnd={handleProgressBarDragEnd}
          isHovered={isTimelineContainerHovered}
          isVolumeContainerHovered={isVolumeContainerHovered}
          progressBarStyle={progressBarStyle}
          ref={timeLineRef}
        />
        <VolumelineContainer
          onHover={() => setIsVolumeContainerHovered(true)}
          onDisHover={() => !isChangeVolume.current && setIsVolumeContainerHovered(false)}
          onVolumeLineHover={() => setIsVolumeLineHovered(true)}
          onVolumeLineDisHover={() => !isChangeVolume.current && setIsVolumeLineHovered(false)}
          onDrag={handleVolumeProgressBarDrag}
          onMuteButtonClick={handleMuteButtonClick}
          volumeProgressBarStyle={volumeProgressBarStyle}
          isVolumeContainerHovered={isVolumeContainerHovered}
          isVolumeLineHovered={isVolumeLineHovered}
          isChangeVolume={isChangeVolume.current}
          isMuted={isMuted}
          ref={volumeRef}
        />
        <MoreButton onClick={handleOpenMoreMenu} ref={buttonRef} />
        <MoreMenu
          isMoreMenuOpen={isMoreMenuOpen}
          isSpeedParamsOpen={isSpeedParamsOpen}
          menuItems={menuItems}
          paramsMenuItems={paramsMenuItems}
          ref={menuRef}
        />
      </div>
    </div>
  );
};
