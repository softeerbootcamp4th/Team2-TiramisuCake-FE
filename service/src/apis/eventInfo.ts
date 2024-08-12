import { EventInfoResponse } from '@/store/types/eventInfoTypes';
import { HEADERS } from '@/constants/lib/constants';
const baseURL = `${import.meta.env.VITE_SITE_URL}/main`;

export const getEventInfo = async (): Promise<EventInfoResponse> => {
  const response = await fetch(`${baseURL}/event`, {
    method: 'GET',
    headers: HEADERS,
  });

  const data: EventInfoResponse = await response.json();

  return data;
};
