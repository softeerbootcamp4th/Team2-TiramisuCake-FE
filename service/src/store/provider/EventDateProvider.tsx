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
  const [startTime, setStartTime] = useState<string>(() => {
    return localStorage.getItem('startTime') || '';
  });
  const [endTime, setEndTime] = useState<string>(() => {
    return localStorage.getItem('endTime') || '';
  });

  useEffect(() => {
    localStorage.setItem('startTime', startTime);
  }, [startTime]);

  useEffect(() => {
    localStorage.setItem('endTime', endTime);
  }, [endTime]);

  return (
    <EventDateContext.Provider
      value={{ startDate, endDate, startTime, endTime }}
    >
      <EventDateSetterContext.Provider
        value={{ setStartDate, setEndDate, setStartTime, setEndTime }}
      >
        {children}
      </EventDateSetterContext.Provider>
    </EventDateContext.Provider>
  );
};
