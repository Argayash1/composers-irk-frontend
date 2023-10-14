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

export const SearchButton: React.FC<SearchButtonProps> = ({ type, onClick }) => {
  return (
    <button
      className={`search-button ${type === 'button' ? 'search-button_place_header' : ''}`}
      type={type}
      onClick={onClick}
    ></button>
  );
};
