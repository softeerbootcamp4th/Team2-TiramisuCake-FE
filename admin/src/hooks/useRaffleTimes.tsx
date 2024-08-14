import { useEffect, useState } from 'react';
import { format, setHours, setMinutes } from 'date-fns';
import { DrawRequest } from '@/types/eventType';

const initialRaffleTimes = {
  startRaffleTime: undefined as Date | undefined,
  endRaffleTime: undefined as Date | undefined,
};

export const useRaffleTimes = () => {
  const [raffleTimes, setRaffleTimes] = useState(initialRaffleTimes);
  const [drawRequest, setDrawRequest] = useState<DrawRequest>({
    startTime: format(new Date(), 'HH:mm:ss'),
    endTime: format(new Date(), 'HH:mm:ss'),
  });

  useEffect(() => {
    if (raffleTimes.startRaffleTime) {
      const twoHoursLater = new Date(raffleTimes.startRaffleTime);
      twoHoursLater.setHours(raffleTimes.startRaffleTime.getHours() + 2);

      const endOfDay = setMinutes(
        setHours(raffleTimes.startRaffleTime, 23),
        59
      );
      const finalEndTime = twoHoursLater > endOfDay ? endOfDay : twoHoursLater;

      setRaffleTimes((prevTimes) => ({
        ...prevTimes,
        endRaffleTime: finalEndTime,
      }));
    }
  }, [raffleTimes.startRaffleTime]);

  useEffect(() => {
    if (raffleTimes.startRaffleTime && raffleTimes.endRaffleTime) {
      setDrawRequest({
        startTime: format(raffleTimes.startRaffleTime, 'HH:mm:ss'),
        endTime: format(raffleTimes.endRaffleTime, 'HH:mm:ss'),
      });
    }
  }, [raffleTimes]);

  const handleStartTimeChange = (date: Date | undefined) => {
    if (date) {
      setRaffleTimes((prevTimes) => ({
        ...prevTimes,
        startRaffleTime: date,
      }));
    }
  };

  const handleEndTimeChange = (date: Date | undefined) => {
    if (date) {
      setRaffleTimes((prevTimes) => ({
        ...prevTimes,
        endRaffleTime: date,
      }));
    }
  };

  return {
    raffleTimes,
    drawRequest,
    handleStartTimeChange,
    handleEndTimeChange,
  };
};
