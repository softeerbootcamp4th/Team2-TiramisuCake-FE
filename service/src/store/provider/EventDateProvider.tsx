import { ReactNode, useEffect, useState } from 'react';
import {
  EventDateContext,
  EventDateSetterContext,
} from '../context/useEventDateContext';

interface EventDateProviderProps {
  children: ReactNode;
}

export const EventDateProvider = ({ children }: EventDateProviderProps) => {
  const [startDate, setStartDate] = useState<string>(() => {
    return localStorage.getItem('startDate') || '';
  });
  const [endDate, setEndDate] = useState<string>(() => {
    return localStorage.getItem('endDate') || '';
  });

  useEffect(() => {
    localStorage.setItem('startDate', startDate);
  }, [startDate]);

  useEffect(() => {
    localStorage.setItem('endDate', endDate);
  }, [endDate]);

  return (
    <EventDateContext.Provider value={{ startDate, endDate }}>
      <EventDateSetterContext.Provider value={{ setStartDate, setEndDate }}>
        {children}
      </EventDateSetterContext.Provider>
    </EventDateContext.Provider>
  );
};
