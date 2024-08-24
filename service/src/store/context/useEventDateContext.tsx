import { createContext, useContext } from 'react';

interface EventDateContextType {
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}

interface EventDateSetterContextType {
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
  setStartTime: (date: string) => void;
  setEndTime: (date: string) => void;
}

export const EventDateContext = createContext<EventDateContextType | undefined>(
  undefined
);

export const EventDateSetterContext = createContext<
  EventDateSetterContextType | undefined
>(undefined);

export const useEventDateContext = () => {
  const context = useContext(EventDateContext);
  if (!context) {
    throw new Error(
      'useEventDateContext must be used within an EventDateProvider'
    );
  }
  return context;
};

export const useEventDateSetterContext = () => {
  const context = useContext(EventDateSetterContext);
  if (!context) {
    throw new Error(
      'useEventDateSetterContext must be used within an EventDateProvider'
    );
  }
  return context;
};
