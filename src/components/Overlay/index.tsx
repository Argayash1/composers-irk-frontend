import React from 'react';
import './Overlay.scss';

type OverLayProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  place?: string;
};

export const Overlay: React.FC<OverLayProps> = ({ children, isOpen, onClose, place }) => {
  React.useEffect(() => {
    function handleEscapeKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => document.removeEventListener('keydown', handleEscapeKey);
    }
  }, [isOpen, onClose]);

  function closeAllPopupsByClickOnOverlay(e: React.MouseEvent) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <section
      className={`overlay ${isOpen ? 'overlay_is_opened' : ''} ${place === 'burger' ? 'overlay_place_burger' : ''}`}
      onMouseDown={closeAllPopupsByClickOnOverlay}
    >
      {children}
    </section>
  );
};
