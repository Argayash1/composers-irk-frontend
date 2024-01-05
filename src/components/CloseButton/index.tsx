import React from 'react';
import './CloseButton.scss';
import clsx from 'clsx';

type CloseButtonProps = {
  onClick: () => void;
  place?: string;
};

export const CloseButton = ({ onClick, place }: CloseButtonProps) => {
  return (
    <button
      className={clsx(
        'close-button',
        place === 'burger' && 'close-button_place_burger',
        place === 'search' && 'close-button_place_search',
        place === 'popup' && 'close-button_place_popup',
      )}
      type='button'
      onClick={onClick}
    ></button>
  );
};
