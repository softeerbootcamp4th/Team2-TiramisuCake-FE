import { createContext, useContext } from 'react';

interface TabContextProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const TabContext = createContext<TabContextProps | undefined>(undefined);

export const useTabContext = () : TabContextProps => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabContext must be used within a TabProvider');
  }
  return context;
};