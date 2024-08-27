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
    return localStorage.getItem('startTime') ?? '09:00:00'; // null 값을 ''로 처리
  });

  const [endTime, setEndTime] = useState<string>(() => {
    return localStorage.getItem('endTime') ?? '23:00:00'; // null 값을 ''로 처리
  });

  useEffect(() => {
    localStorage.setItem('startDate', startDate);
  }, [startDate]);

  useEffect(() => {
    localStorage.setItem('endDate', endDate);
  }, [endDate]);

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
