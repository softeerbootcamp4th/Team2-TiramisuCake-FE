import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { DrawRequest } from '@/type/eventManagement/type';

interface InitialRaffleTimes {
  startDate: string | undefined;
  endDate: string | undefined;
  startTime: string | undefined;
  endTime: string | undefined;
}

const createDateFromString = (
  dateString: string | undefined,
  timeString: string | undefined
): Date => {
  try {
    if (!dateString || !timeString) {
      throw new Error('dateString or timeString is undefined');
    }

    const dateObject = new Date(`${dateString}T${timeString}`);
    // 유효한 날짜인지 확인
    if (isNaN(dateObject.getTime())) {
      return new Date();
    }

    return dateObject;
  } catch (error) {
    console.error('Error creating date:', error);
    return new Date(); // 기본값으로 현재 날짜와 시간을 반환
  }
};

export const useRaffleRequest = ({
  startDate,
  startTime,
  endDate,
  endTime,
}: InitialRaffleTimes) => {
  const startRaffleTime = createDateFromString(startDate, startTime);
  const endRaffleTime = createDateFromString(endDate, endTime);

  const [raffleTimes, setRaffleTimes] = useState({
    startRaffleTime,
    endRaffleTime,
  });

  const [drawRequest, setDrawRequest] = useState<DrawRequest>({
    startTime: format(raffleTimes.startRaffleTime, 'HH:mm:00'),
    endTime: format(raffleTimes.endRaffleTime, 'HH:mm:00'),
  });

  useEffect(() => {
    if (raffleTimes.startRaffleTime && raffleTimes.endRaffleTime) {
      setDrawRequest({
        startTime: format(raffleTimes.startRaffleTime, 'HH:mm:00'),
        endTime: format(raffleTimes.endRaffleTime, 'HH:mm:00'),
      });
    }
  }, [raffleTimes]);

  const handleStartTimeChange = (date: Date | undefined) => {
    if (date) {
      const adjustedDate = new Date(date);
      adjustedDate.setSeconds(0);
      adjustedDate.setMilliseconds(0);

      setRaffleTimes((prevTimes) => ({
        ...prevTimes,
        startRaffleTime: adjustedDate,
      }));
    }
  };

  const handleEndTimeChange = (date: Date | undefined) => {
    if (date) {
      const adjustedDate = new Date(date);

      // 끝나는 시간이 00:00:00인 경우 23:59:59로 조정
      if (
        adjustedDate.getHours() === 0 &&
        adjustedDate.getMinutes() === 0 &&
        adjustedDate.getSeconds() === 0
      ) {
        adjustedDate.setHours(23, 59, 0);
      } else {
        // 초 단위를 00으로 조정
        adjustedDate.setSeconds(0);
      }

      setRaffleTimes((prevTimes) => ({
        ...prevTimes,
        endRaffleTime: adjustedDate,
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
