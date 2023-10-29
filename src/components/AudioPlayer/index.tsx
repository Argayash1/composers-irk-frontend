import React from 'react';
import './AudioPlayer.scss';
import { handleChangeSecondsToMinutesAndSeconds } from '../../utils/utils';

type AudioPlayerProps = {
  src: string;
};

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const customTrackRef = React.useRef<HTMLDivElement>(null);
  const [progress, setProgress] = React.useState<number>(0);
  const [isPlaying, setPlaying] = React.useState<boolean>(false);
  const [totalDuration, setTotalDuration] = React.useState<number>(0);
  const [currentDuration, setCurrentDuration] = React.useState<number>(0);

  const handleTimeUpdate = () => {
    const audioPlayer = audioRef.current;
    if (audioPlayer) {
      const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      setProgress(progress);

      // Обнуление ширины полосы воспроизведения при достижении конца трека
      if (progress >= 100) {
        setProgress(0);
        setPlaying(false); // Добавьте эту строку
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
      // Добавьте следующий обработчик события
      audioPlayer.addEventListener('ended', () => {
        setPlaying(false);
      });
      return () => {
        audioPlayer.removeEventListener('timeupdate', handleTimeUpdate);
        // Удалите обработчик события
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

  const maxProgressBarWidth = 521; // Максимальная ширина полосы воспроизведения
  const progressBarWidth = progress * (maxProgressBarWidth / 100); // Вычисление ширины полосы воспроизведения с учетом прогресса
  const progressBarStyle = { width: `${progressBarWidth}px` }; // Стиль с новой шириной

  return (
    <div className='audio-player'>
      <audio className='audio-player__item-audio' ref={audioRef} src={src} controls></audio>
      <div className='audio-player__container'>
        <button
          className={`audio-player__play-button ${isPlaying ? 'audio-player__play-button_active' : ''}`}
          onClick={togglePlay}
        ></button>
        <span className='audio-player__time-counter'>
          {handleChangeSecondsToMinutesAndSeconds(currentDuration)}/
          {handleChangeSecondsToMinutesAndSeconds(totalDuration)}
        </span>
        <div className='audio-player__progress-bar' ref={customTrackRef} style={progressBarStyle}></div>
        <div className='audio-player__timeline'></div>
        <button className='audio-player__volume-button'></button>
        <button className='audio-player__more-button'></button>
      </div>
    </div>
  );
};
