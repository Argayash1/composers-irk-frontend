import React from 'react';
import { TabButton } from '../TabButton';

type TabsProps = {
  tabNamesArray: string[];
};

export const Tabs: React.FC<TabsProps> = ({ tabNamesArray }) => {
  return (
    <ul className='media__list'>
      {tabNamesArray.map((tabName, index) => (
        <li key={index}>
          <TabButton tabName={tabName} />
        </li>
      ))}
    </ul>
  );
};
