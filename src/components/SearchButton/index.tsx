import React from 'react';
import './SearchButton.scss';

export enum ButtonTypeEnum {
  SUBMIT = 'submit',
  BUTTON = 'button',
}

type SearchButtonProps = {
  type: ButtonTypeEnum;
  onClick?: () => void;
};

export const SearchButton = ({ type, onClick }: SearchButtonProps) => {
  return (
    <button
      className={`search-button ${type === 'button' ? 'search-button_place_header' : ''}`}
      type={type}
      onClick={onClick}
    >
      <svg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M11.875 11.875L16.625 16.625M7.91667 13.4583C4.85609 13.4583 2.375 10.9772 2.375 7.91667C2.375 4.85609 4.85609 2.375 7.91667 2.375C10.9772 2.375 13.4583 4.85609 13.4583 7.91667C13.4583 10.9772 10.9772 13.4583 7.91667 13.4583Z'
          stroke='#62767C'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
};
