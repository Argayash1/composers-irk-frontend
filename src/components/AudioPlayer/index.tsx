import React from 'react';
import './AudioPlayer.scss';

type AudioPlayerProps = {
  src: string;
};

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const customTrackRef = React.useRef<HTMLDivElement>(null);
  const [progress, setProgress] = React.useState(0);

  const handleTimeUpdate = () => {
    const audioPlayer = audioRef.current;
    if (audioPlayer) {
      const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      setProgress(progress);
    }
  };

  React.useEffect(() => {
    const audioPlayer = audioRef.current;
    if (audioPlayer) {
      audioPlayer.addEventListener('timeupdate', handleTimeUpdate);
      return () => {
        audioPlayer.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);

  return (
    <div className='audio-player'>
      <audio className='audio-player__item-audio' ref={audioRef} src={src} controls></audio>
      <div ref={customTrackRef} style={{ backgroundColor: '#333', height: '4px', width: `${progress}%` }}></div>
    </div>
  );
};
