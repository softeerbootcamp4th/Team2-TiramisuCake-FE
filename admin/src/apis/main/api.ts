import { BASE_URL, HEADERS } from '@/constants/api';
import { getCookie } from '@/utils/cookie';

const accessToken = getCookie('accessToken');

export const getEventsData = async () => {
  const headers = { ...HEADERS, Authorization: `Bearer ${accessToken}` };
  const response = await fetch(`${BASE_URL}/event`, {
    method: 'GET',
    headers: headers,
  });
  return response.json();
};

export const getWinnerData = async () => {
  const headers = { ...HEADERS, Authorization: `Bearer ${accessToken}` };
  const response = await fetch(`${BASE_URL}/winner`, {
    method: 'GET',
    headers: headers,
  });

  return response.json();
};
