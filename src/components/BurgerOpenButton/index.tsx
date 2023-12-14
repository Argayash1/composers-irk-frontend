import React from 'react';
import './BurgerOpenButton.scss';

type BurgerOpenButtonProps = {
  onClick: () => void;
};

export const BurgerOpenButton = ({ onClick }: BurgerOpenButtonProps) => {
  return <button onClick={onClick} className='burger-open-button'></button>;
};
