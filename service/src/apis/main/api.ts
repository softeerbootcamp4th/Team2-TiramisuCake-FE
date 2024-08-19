import { BASEURL } from '@/constants/lib/constants';
import { EventInfoResponse } from '@/types/main/eventInfoType';

export const getCarDetailInfo = async () => {
  const res = await fetch(`${BASEURL}/main/car`);
  return res.json();
};

export const getEventInfo = async (): Promise<EventInfoResponse> => {
  const response = await fetch(`${BASEURL}/main/event`);
  const data: EventInfoResponse = await response.json();
  return data;
};
