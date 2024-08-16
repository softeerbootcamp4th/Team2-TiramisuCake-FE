import { AuthorizationHeader, BASE_URL } from '@/constants/api';

export const getEventMetricsData = async () => {
  const response = await fetch(`${BASE_URL}/indicator`, {
    method: 'GET',
    headers: AuthorizationHeader,
  });
  return response.json();
};
