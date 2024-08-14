import { AuthorizationHeader, BASE_URL } from '@/constants/api';

export const getEventsData = async () => {
  const response = await fetch(`${BASE_URL}/event`, {
    method: 'GET',
    headers: AuthorizationHeader,
  });
  return response.json();
};

export const getWinnerData = async () => {
  const response = await fetch(`${BASE_URL}/winner`, {
    method: 'GET',
    headers: AuthorizationHeader,
  });

  return response.json();
};
