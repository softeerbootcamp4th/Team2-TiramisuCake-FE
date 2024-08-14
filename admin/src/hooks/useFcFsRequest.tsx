import { useEffect, useState } from 'react';
import { format, setHours, setMinutes } from 'date-fns';
import { FcFsRequest } from '@/types/eventType';

const useFcFsRequest = () => {
  const initRequest: FcFsRequest = {
    startDate: format(new Date(), 'yyyy-MM-dd'),
    endDate: format(new Date(), 'yyyy-MM-dd'),
    startTime: format(new Date(), 'HH:mm:ss'),
  };

  const [fcfsRequest, setFcfsRequest] = useState<FcFsRequest>(initRequest);
  const [endFCFSTime, setEndFCFSTime] = useState<Date | undefined>(undefined);

  useEffect(() => {
    if (fcfsRequest.startTime) {
      const startFCFSTime = new Date(
        `${fcfsRequest.startDate}T${fcfsRequest.startTime}`
      );
      const twoHoursLater = new Date(startFCFSTime);
      twoHoursLater.setHours(startFCFSTime.getHours() + 2);

      const endOfDay = setMinutes(setHours(startFCFSTime, 23), 59);
      const finalEndTime = twoHoursLater > endOfDay ? endOfDay : twoHoursLater;

      setEndFCFSTime(finalEndTime);
    }
  }, [fcfsRequest.startTime, fcfsRequest.startDate]);

  const handleStartDateChange = (date: Date | undefined) => {
    if (date) {
      setFcfsRequest((prevRequest) => ({
        ...prevRequest,
        startDate: format(date, 'yyyy-MM-dd'),
      }));
    }
  };

  const handleEndDateChange = (date: Date | undefined) => {
    if (date) {
      setFcfsRequest((prevRequest) => ({
        ...prevRequest,
        endDate: format(date, 'yyyy-MM-dd'),
      }));
    }
  };

  const handleStartTimeChange = (date: Date | undefined) => {
    if (date) {
      setFcfsRequest((prevRequest) => ({
        ...prevRequest,
        startTime: format(date, 'HH:mm:ss'),
      }));
    }
  };

  return {
    fcfsRequest,
    endFCFSTime,
    handleStartDateChange,
    handleEndDateChange,
    handleStartTimeChange,
  };
};

export default useFcFsRequest;
