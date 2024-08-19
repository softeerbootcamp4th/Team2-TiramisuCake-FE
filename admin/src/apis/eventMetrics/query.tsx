import { useQuery } from '@tanstack/react-query';
import { getEventMetricsData } from './api';
import { useCookies } from 'react-cookie';

export const useQueryGetMetricsData = () => {
  const [cookies] = useCookies(['accessToken', 'refreshToken']);
  const accessToken = cookies.accessToken;
  const { data, isLoading } = useQuery({
    queryKey: ['Metrics'],
    queryFn: () => getEventMetricsData(accessToken),
  });
  return { data, isLoading };
};
