import React from 'react';
import './BurgerOpenButton.scss';

type BurgerOpenButtonProps = {
  onClick: () => void;
};

export const BurgerOpenButton: React.FC<BurgerOpenButtonProps> = ({ onClick }) => {
  return <button onClick={onClick} className='burger-open-button'></button>;
};
