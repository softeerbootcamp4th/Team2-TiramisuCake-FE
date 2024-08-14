import { useQuery } from '@tanstack/react-query';
import { getEventMetricsData } from './api';

export const useQueryGetMetricsData = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['Metrics'],
    queryFn: () => getEventMetricsData(),
  });
  return { data, isLoading };
};
