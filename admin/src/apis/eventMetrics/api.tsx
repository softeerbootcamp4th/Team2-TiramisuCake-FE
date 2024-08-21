import { BASE_URL, HEADERS } from '@/constants/api';
import { EventMetricsResponse } from '@/type/eventMetrics/type';

export const getEventMetricsData = async (
  token: string
): Promise<EventMetricsResponse> => {
  const response = await fetch(`${BASE_URL}/indicator`, {
    method: 'GET',
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
