import { useState, ReactNode } from 'react';
import { EventDateContext } from '../context/useEventDateContext';

interface EventDateProviderProps {
  children: ReactNode;
}

export const EventDateProvider = ({ children }: EventDateProviderProps) => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  return (
    <EventDateContext.Provider
      value={{ startDate, endDate, setStartDate, setEndDate }}
    >
      {children}
    </EventDateContext.Provider>
  );
};
