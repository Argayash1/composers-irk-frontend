import React from 'react';
import './CloseButton.scss';

type CloseButtonProps = {
  onClick?: () => void;
  place?: string;
};

export const CloseButton: React.FC<CloseButtonProps> = ({ onClick, place }) => {
  return (
    <button
      className={`close-button ${place === 'burger' ? 'close-button_place_burger' : ''} ${
        place === 'search' ? 'close-button_place_search' : ''
      }`}
      type='button'
      onClick={onClick}
    >
      <svg xmlns='http://www.w3.org/2000/svg' width='19' height='19' viewBox='0 0 19 19' fill='none'>
        <path
          d='M16.625 16.625L9.50002 9.50002M9.50002 9.50002L2.375 2.375M9.50002 9.50002L16.625 2.375M9.50002 9.50002L2.375 16.625'
          stroke='#303A3D'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
};
