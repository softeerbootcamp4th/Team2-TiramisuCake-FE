import { useEffect, useState } from 'react';
import {
  format,
  setHours,
  setMinutes,
  startOfWeek,
  endOfWeek,
  addDays,
} from 'date-fns';
import { FcFsRequest } from '@/type/eventManagement/type';

interface FcFsRequestProps {
  startDate: string;
  endDate: string;
}
const useFcFsRequest = ({ startDate, endDate }: FcFsRequestProps) => {
  const initRequest: FcFsRequest = {
    startDate: format(new Date(startDate), 'yyyy-MM-dd'),
    endDate: format(new Date(endDate), 'yyyy-MM-dd'),
    startTime: format(new Date(startDate), 'HH:mm:00'),
  };

  const [fcfsRequest, setFcfsRequest] = useState<FcFsRequest>(initRequest);
  const [endFCFSTime, setEndFCFSTime] = useState<Date | undefined>(undefined);

  const ensureSameWeek = (start: Date, end: Date): Date => {
    const startWeekStart = startOfWeek(start, { weekStartsOn: 1 }); // 월요일 시작
    const startWeekEnd = endOfWeek(start, { weekStartsOn: 1 });

    if (end < startWeekStart || end > startWeekEnd) {
      return startWeekEnd;
    }
    return end;
  };

  const ensureStartBeforeEnd = (start: Date, end: Date): Date => {
    if (start >= end) {
      const newEndDate = new Date(start);
      newEndDate.setDate(start.getDate() + 1);
      return newEndDate;
    }
    return end;
  };

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
      // 일요일인지 확인
      if (date.getDay() === 0) {
        alert('시작 날짜는 월요일에서 토요일 사이여야 합니다.');
        // 그 주의 토요일로 날짜 변경
        date = addDays(endOfWeek(date, { weekStartsOn: 1 }), -1);
      }

      const endDate = new Date(fcfsRequest.endDate); // 기존 endDate 불러오기
      const newEndDate = ensureSameWeek(date, endDate); // 주간 범위 확인

      setFcfsRequest((prevRequest) => ({
        ...prevRequest,
        startDate: format(date, 'yyyy-MM-dd'),
        endDate: format(ensureStartBeforeEnd(date, newEndDate), 'yyyy-MM-dd'),
      }));
    }
  };

  const handleEndDateChange = (date: Date | undefined) => {
    if (date) {
      const newEndDate = ensureSameWeek(new Date(fcfsRequest.startDate), date);
      setFcfsRequest((prevRequest) => ({
        ...prevRequest,
        endDate: format(
          ensureStartBeforeEnd(new Date(fcfsRequest.startDate), newEndDate),
          'yyyy-MM-dd'
        ),
      }));
    }
  };

  const handleStartTimeChange = (date: Date | undefined) => {
    if (date) {
      const hours = date.getHours();
      const adjustedDate = new Date(date);
      adjustedDate.setHours(hours, date.getMinutes(), 0);

      setFcfsRequest((prevRequest) => ({
        ...prevRequest,
        startTime: format(adjustedDate, 'HH:mm:00'),
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
