import React from 'react';
import './AudioPlayer.scss';
import { handleChangeSecondsToMinutesAndSeconds } from '../../utils/utils';

type AudioPlayerProps = {
  src: string;
};

type ButtonClick = MouseEvent & {
  composedPath: Node[];
};

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const audioLinkRef = React.useRef<HTMLAnchorElement>(null);
  const customTrackRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const [progress, setProgress] = React.useState<number>(0);
  const [isPlaying, setPlaying] = React.useState<boolean>(false);
  const [totalDuration, setTotalDuration] = React.useState<number>(0);
  const [isTimelineContainerHovered, setIsTimelineContainerHovered] = React.useState<boolean>(false);
  const [currentDuration, setCurrentDuration] = React.useState<number>(0);
  const [isVolumeLineHovered, setIsVolumeLineHovered] = React.useState<boolean>(false);
  const [isVolumeContainerHovered, setIsVolumeContainerHovered] = React.useState<boolean>(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = React.useState<boolean>(false);
  const [isSpeedParamsOpen, setIsSpeedParamsOpen] = React.useState<boolean>(false);

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
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  const maxProgressBarWidth = 521; // Максимальная ширина полосы воспроизведения
  const progressBarWidth = progress * (maxProgressBarWidth / 100); // Вычисление ширины полосы воспроизведения с учетом прогресса
  const progressBarStyle = { width: `${progressBarWidth}px` }; // Стиль с новой шириной

  const mainMenuItems = [
    { name: 'Скачать', onClick: handleDownload },
    { name: 'Скорость воспроизведения', onClick: handleToggleSpeedParams },
  ];

  const paramsMenuItems = [
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
      <audio className='audio-player__item-audio' ref={audioRef} src={src} controls>
        Ваш браузер не поддерживает встроенное аудио. Попробуйте скачать его
        <a href={src} ref={audioLinkRef} download>
          по ссылке
        </a>
      </audio>
      <div className='audio-player__container'>
        <button
          className={`audio-player__play-button ${isPlaying ? 'audio-player__play-button_active' : ''}`}
          onClick={togglePlay}
        ></button>
        <span className='audio-player__time-counter'>
          {handleChangeSecondsToMinutesAndSeconds(currentDuration)}/
          {handleChangeSecondsToMinutesAndSeconds(totalDuration)}
        </span>
        <div
          className='audio-player__timeline-container'
          onMouseEnter={() => setIsTimelineContainerHovered(true)}
          onMouseLeave={() => setIsTimelineContainerHovered(false)}
        >
          <div className='audio-player__progress-bar-container'>
            <div className='audio-player__progress-bar' ref={customTrackRef} style={progressBarStyle}></div>
            <button
              className={`audio-player__progress-bar-button ${
                isTimelineContainerHovered ? 'audio-player__progress-bar-button_active' : ''
              }`}
            ></button>
          </div>
          <div className='audio-player__timeline'></div>
        </div>

        <div
          className='audio-player__volume-container'
          onMouseEnter={() => setIsVolumeContainerHovered(true)}
          onMouseLeave={() => setIsVolumeContainerHovered(false)}
        >
          <div
            className='audio-player__timeline-container audio-player__timeline-container_type_volume'
            onMouseEnter={() => setIsVolumeLineHovered(true)}
            onMouseLeave={() => setIsVolumeLineHovered(false)}
          >
            <div
              className={`audio-player__timeline audio-player__timeline_type_volume ${
                isVolumeContainerHovered ? 'audio-player__timeline_hovered' : ''
              }`}
            ></div>
          </div>
          <div className='audio-player__volume-progress-bar-container'>
            <button
              className={`audio-player__progress-bar-button ${
                isVolumeLineHovered ? 'audio-player__progress-bar-button_active' : ''
              }`}
            ></button>
          </div>
          <button className='audio-player__volume-button'></button>
        </div>
        <button
          title='дополнительные параметры'
          onClick={handleOpenMoreMenu}
          ref={buttonRef}
          className={`audio-player__more-button ${isMoreMenuOpen ? 'audio-player__more-button_active' : ''}`}
        ></button>
        <div
          ref={menuRef}
          className={`audio-player__more-menu ${isMoreMenuOpen ? 'audio-player__more-menu_is_opened' : ''}`}
        >
          <ul
            className={`audio-player__more-menu-main ${
              !isSpeedParamsOpen ? 'audio-player__more-menu-main_is_opened' : ''
            }`}
          >
            {mainMenuItems.map((mainMenuItem, index) => (
              <li key={index}>
                <button onClick={mainMenuItem.onClick} className='audio-player__more-menu-button'>
                  {mainMenuItem.name}
                </button>
              </li>
            ))}
          </ul>
          <ul
            className={`audio-player__more-menu-params ${
              isSpeedParamsOpen ? 'audio-player__more-menu-params_is_opened' : ''
            }`}
          >
            {paramsMenuItems.map((paramMenuItem, index) => (
              <li key={index}>
                <button onClick={paramMenuItem.onClick} className='audio-player__more-menu-button'>
                  {paramMenuItem.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
