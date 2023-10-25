import React from 'react';
import { Overlay } from '../Overlay';
import './ReportPopup.scss';

type ReportPopupProps = {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
  altText: string;
};

export const ReportPopup: React.FC<ReportPopupProps> = ({ isOpen, onClose, imageUrl, altText }) => {
  return (
    <Overlay isOpen={isOpen} onClose={onClose}>
      <div className='report-popup'>
        <button className='report-popup__button' onClick={onClose}></button>
        <img className='report-popup__image' src={imageUrl} alt={altText} />
      </div>
    </Overlay>
  );
};
