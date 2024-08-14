import { useQuery } from '@tanstack/react-query';
import { getEventsData, getWinnerData } from './api';
import { useQueries } from '@tanstack/react-query';

export const useEventsData = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['getEventsData'],
    queryFn: () => getEventsData(),
  });

  return {
    data,
    isLoading,
  };
};

export const useWinnerData = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['getWinnerData'],
    queryFn: () => getWinnerData(),
  });

  return {
    data,
    isLoading,
  };
};

export const useCombinedData = () => {
  const queryResults = useQueries({
    queries: [
      {
        queryKey: ['getEventsData'],
        queryFn: () => getEventsData(),
      },
      {
        queryKey: ['getWinnerData'],
        queryFn: () => getWinnerData(),
      },
    ],
  });

  const isLoading = queryResults.some((query) => query.isLoading);
  const eventsData = queryResults[0].data;
  const winnerData = queryResults[1].data;

  return {
    eventsData,
    winnerData,
    isLoading,
  };
};
