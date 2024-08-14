import { BASE_URL, HEADERS } from '@/constants/api';
import { getCookie } from '@/utils/cookie';

export const getEventsData = async () => {
  const accessToken = getCookie('accessToken');
  const headers = { ...HEADERS, Authorization: `Bearer ${accessToken}` };
  const response = await fetch(`${BASE_URL}/event`, {
    method: 'GET',
    headers: headers,
  });
  return response.json();
};

export const getWinnerData = async () => {
  const accessToken = getCookie('accessToken');
  const headers = { ...HEADERS, Authorization: `Bearer ${accessToken}` };
  const response = await fetch(`${BASE_URL}/winner`, {
    method: 'GET',
    headers: headers,
  });

  return response.json();
};
