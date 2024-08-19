import { BASE_URL, HEADERS } from '@/constants/api';

export const getEventMetricsData = async (token: string) => {
  const response = await fetch(`${BASE_URL}/indicator`, {
    method: 'GET',
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
