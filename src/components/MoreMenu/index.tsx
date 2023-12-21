import React from 'react';
import './MoreMenu.scss';
import downloadIcon from '../../assets/icons/more-menu-download-icon.svg';
import speedIcon from '../../assets/icons/more-menu-speed-icon.svg';

type MenuItem = {
  name: string;
  onClick: () => void;
  icon: string;
};

type MoreMenuProps = {
  onToggleSpeedParams: () => void;
  onDownLoad: () => void;
  isMoreMenuOpen: boolean;
};

export const MoreMenu = React.forwardRef<HTMLUListElement, MoreMenuProps>((props, ref) => {
  const { onToggleSpeedParams, onDownLoad, isMoreMenuOpen } = props;

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

  return (
    <ul ref={ref} className={`more-menu ${isMoreMenuOpen ? 'more-menu_is_opened' : ''}`}>
      {menuItems.map((menuItem, index) => (
        <li key={index} className='more-menu__item'>
          <button onClick={menuItem.onClick} className='more-menu__button'>
            <div className='more-menu__button-icon' style={{ backgroundImage: `url(${menuItem.icon})` }}></div>
            {menuItem.name}
          </button>
        </li>
      ))}
    </ul>
  );
});
