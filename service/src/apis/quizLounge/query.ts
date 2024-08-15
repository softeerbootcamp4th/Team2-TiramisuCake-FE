import { useQuery } from '@tanstack/react-query';
import { getFCFSEvent, getTutorialFCFSEvent } from './api';

export const useQueryGetFCFSEvent = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['getFCFSEvent'],
    queryFn: getFCFSEvent,
  });
  return {
    data,
    isLoading,
  };
};

export const useQueryGetTutorialFCFSEvent = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['getTutorialFCFSEvent'],
    queryFn: getTutorialFCFSEvent,
  });
  return {
    data,
    isLoading,
  };
};
