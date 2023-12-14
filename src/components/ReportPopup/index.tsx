import React from 'react';
import { Overlay } from '../Overlay';
import './ReportPopup.scss';
import { CloseButton } from '../CloseButton';

type ReportPopupProps = {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
  altText: string;
};

export const ReportPopup = ({ isOpen, onClose, imageUrl, altText }: ReportPopupProps) => {
  return (
    <Overlay isOpen={isOpen} onClose={onClose}>
      <div className='report-popup'>
        <CloseButton onClick={onClose} place='popup' />
        <img className='report-popup__image' src={imageUrl} alt={altText} />
      </div>
    </Overlay>
  );
};
