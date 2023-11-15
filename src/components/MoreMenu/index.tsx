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
