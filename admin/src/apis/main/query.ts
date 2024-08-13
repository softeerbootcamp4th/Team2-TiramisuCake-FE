import { useQuery } from '@tanstack/react-query';
import { useCookies } from 'react-cookie';
import { getEventsData, getWinnerData } from './api';
import { useQueries } from '@tanstack/react-query';

export const useEventsData = () => {
  const [cookies] = useCookies(['accessToken']);
  const accessToken = cookies.accessToken;

  const { data, isLoading } = useQuery({
    queryKey: ['getEventsData'],
    queryFn: () => getEventsData(accessToken),
    enabled: !!accessToken,
  });

  return {
    data,
    isLoading,
  };
};

export const useWinnerData = () => {
  const [cookies] = useCookies(['accessToken']);
  const accessToken = cookies.accessToken;

  const { data, isLoading } = useQuery({
    queryKey: ['getWinnerData'],
    queryFn: () => getWinnerData(accessToken),
    enabled: !!accessToken,
  });

  return {
    data,
    isLoading,
  };
};

export const useCombinedData = () => {
  const [cookies] = useCookies(['accessToken']);
  const accessToken = cookies.accessToken;

  const queryResults = useQueries({
    queries: [
      {
        queryKey: ['getEventsData'],
        queryFn: () => getEventsData(accessToken),
        enabled: !!accessToken,
      },
      {
        queryKey: ['getWinnerData'],
        queryFn: () => getWinnerData(accessToken),
        enabled: !!accessToken,
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
