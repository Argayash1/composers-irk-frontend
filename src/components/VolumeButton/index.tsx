import React from 'react';
import './VolumeButton.scss';

type VolumeButtonProps = {
  onClick: () => void;
  isMuted: boolean;
};

export const VolumeButton = ({ onClick, isMuted }: VolumeButtonProps) => {
  return (
    <button onClick={onClick} className='volume-button'>
      {isMuted ? (
        <svg
          className='volume-button__icon-muted'
          xmlns='http://www.w3.org/2000/svg'
          width='22'
          height='22'
          viewBox='0 0 22 22'
          fill='none'
        >
          <g clipPath='url(#clip0_510_1168)'>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M16 3.00176C16 2.18839 15.0806 1.71527 14.4188 2.18803L9 6.05857H6C4.89543 6.05857 4 6.954 4 8.05857V14.0586C4 15.1631 4.89543 16.0586 6 16.0586H6.22832L16 8.45838V3.00176ZM16 10.9921L9.25332 16.2395L14.4188 19.9291C15.0806 20.4019 16 19.9288 16 19.1154V10.9921Z'
              fill='#303A3D'
            />
            <path
              d='M20 4.05859L2 18.0586'
              stroke='#303A3D'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <defs>
            <clipPath id='clip0_510_1168'>
              <rect width='22' height='22' fill='white' />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          className='volume-button__icon'
          xmlns='http://www.w3.org/2000/svg'
          width='22'
          height='22'
          viewBox='0 0 22 22'
          fill='none'
        >
          <g clipPath='url(#clip0_513_295)'>
            <path
              d='M2.75 8.2501V13.7501H6.41667L11 18.3334V3.66677L6.41667 8.2501H2.75ZM15.125 11.0001C15.125 9.3776 14.19 7.98427 12.8333 7.30594V14.6851C14.19 14.0159 15.125 12.6226 15.125 11.0001ZM12.8333 2.96094V4.84927C15.4825 5.6376 17.4167 8.09427 17.4167 11.0001C17.4167 13.9059 15.4825 16.3626 12.8333 17.1509V19.0393C16.5092 18.2051 19.25 14.9234 19.25 11.0001C19.25 7.07677 16.5092 3.7951 12.8333 2.96094Z'
              fill='#303A3D'
            />
          </g>
          <defs>
            <clipPath id='clip0_513_295'>
              <rect width='22' height='22' fill='white' />
            </clipPath>
          </defs>
        </svg>
      )}
    </button>
  );
};
