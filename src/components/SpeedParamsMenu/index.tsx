import React from 'react';
import './SpeedParamsMenu.scss';

type SpeedParamsMenuProps = {
  isSpeedParamsOpen: boolean;
  onToggleSpeedParams: () => void;
  onChangePlaybackSpeed: (speed: number) => void;
};

type ParamsMenuItem = {
  name: string;
  onClick: () => void;
};

export const SpeedParamsMenu = React.forwardRef<HTMLUListElement, SpeedParamsMenuProps>((props, ref) => {
  const { isSpeedParamsOpen, onToggleSpeedParams, onChangePlaybackSpeed } = props;

  const paramsMenuItems: ParamsMenuItem[] = [
    { name: 'Параметры', onClick: onToggleSpeedParams },
    { name: '0,25', onClick: () => onChangePlaybackSpeed(0.25) },
    { name: '0,5', onClick: () => onChangePlaybackSpeed(0.5) },
    { name: '0,75', onClick: () => onChangePlaybackSpeed(0.75) },
    { name: 'Обычный', onClick: () => onChangePlaybackSpeed(1) },
    { name: '1', onClick: () => onChangePlaybackSpeed(1) },
    { name: '1,25', onClick: () => onChangePlaybackSpeed(1.25) },
    { name: '1,5', onClick: () => onChangePlaybackSpeed(1.5) },
    { name: '1,75', onClick: () => onChangePlaybackSpeed(1.75) },
    { name: '2', onClick: () => onChangePlaybackSpeed(2) },
  ];

  return (
    <ul ref={ref} className={`speed-params-menu ${isSpeedParamsOpen ? 'speed-params-menu_is_opened' : ''}`}>
      {paramsMenuItems.map((paramMenuItem, index) => (
        <li key={index} className='speed-params-menu__item'>
          <button onClick={paramMenuItem.onClick} className='speed-params-menu__button'>
            {paramMenuItem.name}
          </button>
        </li>
      ))}
    </ul>
  );
});
