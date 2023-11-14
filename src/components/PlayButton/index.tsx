import React from 'react';
import './PlayButton.scss';

type PlayButtonProps = {
  isPlaying: boolean;
  onClick: () => void;
};

export const PlayButton: React.FC<PlayButtonProps> = ({ isPlaying, onClick }) => {
  return (
    <button className='play-button' onClick={onClick}>
      {!isPlaying ? (
        <svg
          className='play-button__play-icon'
          xmlns='http://www.w3.org/2000/svg'
          width='22'
          height='22'
          viewBox='0 0 22 22'
          fill='none'
        >
          <g clipPath='url(#clip0_508_1149)'>
            <path d='M7.33337 4.5835V17.4168L17.4167 11.0002L7.33337 4.5835Z' fill='#303A3D' />
          </g>
          <defs>
            <clipPath id='clip0_508_1149'>
              <rect width='22' height='22' fill='white' />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          className='play-button__pause-icon'
          xmlns='http://www.w3.org/2000/svg'
          width='14'
          height='14'
          viewBox='0 0 14 14'
          fill='none'
        >
          <rect x='2.3335' y='1.75' width='3.5' height='10.5' rx='1.16667' fill='#303A3D' />
          <rect x='8.1665' y='1.75' width='3.5' height='10.5' rx='1.16667' fill='#303A3D' />
        </svg>
      )}
    </button>
  );
};
