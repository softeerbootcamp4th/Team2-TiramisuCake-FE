import { BASE_URL, AuthorizationHeader } from '@/constants/api';
import { DrawRequest, FcFsRequest } from '@/types/eventType';

export const postFcFsData = async (body: FcFsRequest) => {
  const response = await fetch(`${BASE_URL}/event/fcfs`, {
    method: 'POST',
    headers: AuthorizationHeader,
    body: JSON.stringify(body),
  });
  return response.json();
};

export const postDrawData = async (body: DrawRequest) => {
  const response = await fetch(`${BASE_URL}/event/draw`, {
    method: 'POST',
    headers: AuthorizationHeader,
    body: JSON.stringify(body),
  });

  return response.json();
};
