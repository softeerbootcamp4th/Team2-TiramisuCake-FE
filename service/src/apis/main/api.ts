import { HEADERS } from '@/constants/lib/constants';
import { EventInfoResponse } from '@/types/main/eventInfoType';

const baseURL = `${import.meta.env.VITE_SITE_URL}`;

export const getCarDetailInfo = async () => {
  const res = await fetch(`${baseURL}/main/car`);
  return res.json();
};

export const getEventInfo = async (): Promise<EventInfoResponse> => {
  const response = await fetch(`${baseURL}/main/event`, {
    method: 'GET',
    headers: HEADERS,
  });

  const data: EventInfoResponse = await response.json();

  return data;
};
