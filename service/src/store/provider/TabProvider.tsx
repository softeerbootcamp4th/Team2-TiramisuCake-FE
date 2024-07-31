import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TabContext } from '../context/useTabContext';

export const TabProvider = ({
  children
}:ReactNode) => {
  const [activeTab, setActiveTab] = useState('');

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};
