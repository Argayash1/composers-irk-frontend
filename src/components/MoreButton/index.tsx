import React from 'react';
import './MoreButton.scss';

type MoreButtonProps = {
  onClick: () => void;
};

export const MoreButton = React.forwardRef<HTMLButtonElement, MoreButtonProps>((props, ref) => {
  const { onClick } = props;

  return (
    <button className='more-button' title='дополнительные параметры' ref={ref} onClick={onClick}>
      <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22' fill='none'>
        <g clipPath='url(#clip0_513_298)'>
          <path
            d='M11.0001 7.33317C12.0084 7.33317 12.8334 6.50817 12.8334 5.49984C12.8334 4.4915 12.0084 3.6665 11.0001 3.6665C9.99175 3.6665 9.16675 4.4915 9.16675 5.49984C9.16675 6.50817 9.99175 7.33317 11.0001 7.33317ZM11.0001 9.1665C9.99175 9.1665 9.16675 9.9915 9.16675 10.9998C9.16675 12.0082 9.99175 12.8332 11.0001 12.8332C12.0084 12.8332 12.8334 12.0082 12.8334 10.9998C12.8334 9.9915 12.0084 9.1665 11.0001 9.1665ZM11.0001 14.6665C9.99175 14.6665 9.16675 15.4915 9.16675 16.4998C9.16675 17.5082 9.99175 18.3332 11.0001 18.3332C12.0084 18.3332 12.8334 17.5082 12.8334 16.4998C12.8334 15.4915 12.0084 14.6665 11.0001 14.6665Z'
            fill='#303A3D'
          />
        </g>
        <defs>
          <clipPath id='clip0_513_298'>
            <rect width='22' height='22' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
});
