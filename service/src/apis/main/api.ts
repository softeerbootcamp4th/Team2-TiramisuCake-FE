import { BASEURL, HEADERS } from '@/constants/lib/constants';
import { EventInfoResponse } from '@/types/main/eventInfoType';

export const getCarDetailInfo = async () => {
  const res = await fetch(`${BASEURL}/main/car`);
  return res.json();
};

export const getEventInfo = async (): Promise<EventInfoResponse> => {
  const response = await fetch(`${BASEURL}/event`, {
    method: 'GET',
    headers: HEADERS,
  });

  const data: EventInfoResponse = await response.json();

  return data;
};
