import React from 'react';
import './Tabs.scss';

type TabsProps = {
  tabNamesArray: string[];
  value: number;
  onChangeTab: (index: number) => void;
};

export const Tabs: React.FC<TabsProps> = ({ tabNamesArray, value, onChangeTab }) => {
  return (
    <ul className='tabs'>
      {tabNamesArray.map((tabName, index) => (
        <li key={index}>
          <button
            className={`tabs__button ${value === index ? 'tabs__button_active' : ''}`}
            onClick={() => onChangeTab(index)}
          >
            {tabName}
          </button>
        </li>
      ))}
    </ul>
  );
};
