import React from 'react';
import './TabButton.scss';

type TabButtonProps = {
  tabName: string;
};

export const TabButton: React.FC<TabButtonProps> = ({ tabName }) => {
  return <button className='tab-button'>{tabName}</button>;
};
