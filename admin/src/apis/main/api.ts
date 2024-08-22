import { BASE_URL, HEADERS } from '@/constants/api';

export const getEventsData = async (token: string) => {
  const response = await fetch(`${BASE_URL}/event`, {
    method: 'GET',
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const getWinnerData = async (token: string) => {
  const response = await fetch(`${BASE_URL}/winner`, {
    method: 'GET',
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};
