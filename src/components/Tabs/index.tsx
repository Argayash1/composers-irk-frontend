import React from 'react';
import './Tabs.scss';

type TabsProps = {
  tabNamesArray: string[];
  value: number;
  onChangeTab: (index: number) => void;
};

export const Tabs = ({ tabNamesArray, value, onChangeTab }: TabsProps) => {
  const tabsClassName = `tabs ${
    tabNamesArray.includes('Все ноты') || tabNamesArray.includes('Аудиозаписи') || tabNamesArray.includes('СМИ о нас')
      ? 'tabs_place_scores'
      : ''
  }`;

  return (
    <ul className={tabsClassName}>
      {tabNamesArray.map((tabName, index) => (
        <li key={index}>
          <button
            className={`tabs__button ${value === index ? 'tabs__button_active' : ''} `}
            onClick={() => onChangeTab(index)}
          >
            {tabName}
          </button>
        </li>
      ))}
    </ul>
  );
};
