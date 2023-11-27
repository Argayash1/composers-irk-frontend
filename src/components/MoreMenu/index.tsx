import React from 'react';
import './MoreMenu.scss';
import downloadIcon from '../../assets/icons/more-menu-download-icon.svg';
import speedIcon from '../../assets/icons/more-menu-speed-icon.svg';

type MenuItem = {
  name: string;
  onClick: () => void;
  icon: string;
};

type ParamsMenuItem = {
  name: string;
  onClick: () => void;
};

type MoreMenuProps = {
  onToggleSpeedParams: () => void;
  onChangePlaybackSpeed: (speed: number) => void;
  onDownLoad: () => void;
  isMoreMenuOpen: boolean;
  isSpeedParamsOpen: boolean;
};

export const MoreMenu = React.forwardRef<HTMLDivElement, MoreMenuProps>((props, ref) => {
  const { onToggleSpeedParams, onChangePlaybackSpeed, onDownLoad, isMoreMenuOpen, isSpeedParamsOpen } = props;

  const menuItems: MenuItem[] = [
    {
      name: 'Скачать',
      onClick: onDownLoad,
      icon: downloadIcon,
    },
    {
      name: 'Скорость воспроизведения',
      onClick: onToggleSpeedParams,
      icon: speedIcon,
    },
  ];

  const paramsMenuItems: ParamsMenuItem[] = [
    { name: 'Параметры', onClick: onToggleSpeedParams },
    { name: '0,25', onClick: () => onChangePlaybackSpeed(0.25) },
    { name: '0,5', onClick: () => onChangePlaybackSpeed(0.5) },
    { name: '0,75', onClick: () => onChangePlaybackSpeed(0.75) },
    { name: 'Обычный', onClick: () => onChangePlaybackSpeed(1) },
    { name: '1,25', onClick: () => onChangePlaybackSpeed(1.25) },
    { name: '1,5', onClick: () => onChangePlaybackSpeed(1.5) },
    { name: '1,75', onClick: () => onChangePlaybackSpeed(1.75) },
    { name: '2', onClick: () => onChangePlaybackSpeed(2) },
  ];

  return (
    <div
      ref={ref}
      className={`more-menu ${isMoreMenuOpen ? 'more-menu_is_opened' : ''} ${
        isSpeedParamsOpen ? 'more-menu_type_speed-params' : ''
      }`}
    >
      <ul className={`more-menu__main ${!isSpeedParamsOpen ? 'more-menu__main_is_opened' : ''}`}>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <button onClick={menuItem.onClick} className='more-menu__button'>
              <div className='more-menu__button-icon' style={{ backgroundImage: `url(${menuItem.icon})` }}></div>
              {menuItem.name}
            </button>
          </li>
        ))}
      </ul>
      <ul className={`more-menu__params ${isSpeedParamsOpen ? 'more-menu__params_is_opened' : ''}`}>
        {paramsMenuItems.map((paramMenuItem, index) => (
          <li key={index}>
            <button onClick={paramMenuItem.onClick} className='more-menu__button more-menu__button_type_params'>
              {paramMenuItem.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});
