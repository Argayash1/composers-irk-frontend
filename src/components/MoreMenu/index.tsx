import React from 'react';
import { MenuItem, ParamsMenuItem } from '../AudioPlayer';
import './MoreMenu.scss';

type MoreMenuProps = {
  isMoreMenuOpen: boolean;
  isSpeedParamsOpen: boolean;
  menuItems: MenuItem[];
  paramsMenuItems: ParamsMenuItem[];
};

export const MoreMenu = React.forwardRef<HTMLDivElement, MoreMenuProps>((props, ref) => {
  const { isMoreMenuOpen, isSpeedParamsOpen, menuItems, paramsMenuItems } = props;
  return (
    <div ref={ref} className={`more-menu ${isMoreMenuOpen ? 'more-menu_is_opened' : ''}`}>
      <ul className={`more-menu__main ${!isSpeedParamsOpen ? 'more-menu__main_is_opened' : ''}`}>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <button onClick={menuItem.onClick} className='more-menu__button'>
              {menuItem.icon as React.ReactElement}
              {menuItem.name}
            </button>
          </li>
        ))}
      </ul>
      <ul className={`more-menu__params ${isSpeedParamsOpen ? 'more-menu__params_is_opened' : ''}`}>
        {paramsMenuItems.map((paramMenuItem, index) => (
          <li key={index}>
            <button onClick={paramMenuItem.onClick} className='more-menu__button'>
              {paramMenuItem.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});
