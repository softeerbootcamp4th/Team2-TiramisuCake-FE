import { BASE_URL, HEADERS } from '@/constants/api';
import { DrawRequest, FcFsRequest } from '@/type/eventManagement/type';

export const postFcFsData = async (body: FcFsRequest, token: string) => {
  const response = await fetch(`${BASE_URL}/event/fcfs`, {
    method: 'POST',
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
  return response.json();
};

export const postDrawData = async (body: DrawRequest, token: string) => {
  const response = await fetch(`${BASE_URL}/event/draw`, {
    method: 'POST',
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  return response.json();
};
