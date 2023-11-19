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
      } ${place === 'popup' ? 'close-button_place_popup' : ''}`}
      type='button'
      onClick={onClick}
    ></button>
  );
};
