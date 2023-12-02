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

type AudioPlayerProps = {
  src: string;
};

export type ButtonClick = MouseEvent & {
  composedPath: Node[];
};

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const audioLinkRef = React.useRef<HTMLAnchorElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
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

  const handlToggleChangeTime = () => {
    setIsChangeTime(false);
  };

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

      setIsChangeTime(true);

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
          onDrag={handleProgressBarDrag}
          onDragEnd={handleProgressBarDragEnd}
          onToggleChangeTime={handlToggleChangeTime}
          isVolumeContainerHovered={isVolumeContainerHovered}
          isChangeTime={isChangeTime}
          progress={progress}
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
        />
        <MoreButton onClick={handleOpenMoreMenu} ref={buttonRef} />
        <MoreMenu
          onToggleSpeedParams={handleToggleSpeedParams}
          onChangePlaybackSpeed={handleChangePlaybackSpeed}
          onDownLoad={handleDownload}
          isMoreMenuOpen={isMoreMenuOpen}
          isSpeedParamsOpen={isSpeedParamsOpen}
          ref={menuRef}
        />
      </div>
    </div>
  );
};
