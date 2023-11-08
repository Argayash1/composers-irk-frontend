import React from 'react';
import { Overlay } from '../Overlay';
import { MainMenu } from '../MainMenu';

type BurgerMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  return (
    <Overlay isOpen={isOpen} onClose={onClose} place='burger'>
      <MainMenu place='burger' isOpen={isOpen} onClose={onClose} />
    </Overlay>
  );
};
