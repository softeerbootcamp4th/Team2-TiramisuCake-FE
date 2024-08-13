import { BASE_URL, HEADERS } from '@/constants/api';

export const getEventsData = async (accessToken: string) => {
  const headers = { ...HEADERS, Authorization: `Bearer ${accessToken}` };
  const response = await fetch(`${BASE_URL}/admin/event`, {
    method: 'GET',
    headers: headers,
  });
  return response.json();
};

export const getWinnerData = async (accessToken: string) => {
  const headers = { ...HEADERS, Authorization: `Bearer ${accessToken}` };
  const response = await fetch(`${BASE_URL}/admin/winner`, {
    method: 'GET',
    headers: headers,
  });

  return response.json();
};
