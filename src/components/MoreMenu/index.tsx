import React from 'react';
import { MenuItem, ParamsMenuItem } from '../AudioPlayer';

type MoreMenuProps = {
  isMoreMenuOpen: boolean;
  isSpeedParamsOpen: boolean;
  menuItems: MenuItem[];
  paramsMenuItems: ParamsMenuItem[];
};

export const MoreMenu = React.forwardRef<HTMLDivElement, MoreMenuProps>((props, ref) => {
  const { isMoreMenuOpen, isSpeedParamsOpen, menuItems, paramsMenuItems } = props;
  return (
    <div ref={ref} className={`audio-player__more-menu ${isMoreMenuOpen ? 'audio-player__more-menu_is_opened' : ''}`}>
      <ul
        className={`audio-player__more-menu-main ${!isSpeedParamsOpen ? 'audio-player__more-menu-main_is_opened' : ''}`}
      >
        {menuItems.map((menuItem, index) => (
          <li key={index} className='audio-player__more-menu-main-item'>
            <button onClick={menuItem.onClick} className='audio-player__more-menu-button'>
              {menuItem.icon as React.ReactElement}
              {menuItem.name}
            </button>
          </li>
        ))}
      </ul>
      <ul
        className={`audio-player__more-menu-params ${
          isSpeedParamsOpen ? 'audio-player__more-menu-params_is_opened' : ''
        }`}
      >
        {paramsMenuItems.map((paramMenuItem, index) => (
          <li key={index}>
            <button onClick={paramMenuItem.onClick} className='audio-player__more-menu-button'>
              {paramMenuItem.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});
