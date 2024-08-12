import { createContext, useContext } from 'react';

interface EventDateContextType {
  startDate: string;
  endDate: string;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
}

export const EventDateContext = createContext<EventDateContextType | undefined>(
  undefined
);

export const useEventDateContext = () => {
  const context = useContext(EventDateContext);
  if (!context) {
    throw new Error(
      'useEventDateContext must be used within an EventDateProvider'
    );
  }
  return context;
};
