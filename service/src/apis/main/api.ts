import { BASEURL } from '@/constants/lib/constants';

export const getCarDetailInfo = async () => {
  const res = await fetch(`${BASEURL}/main/car`);
  return res.json();
};

export const getStaticEventInfo = async () => {
  const response = await fetch(`${BASEURL}/main/event/static`);
  return response.json();
};

export const getDynamicEventInfo = async () => {
  const response = await fetch(`${BASEURL}/main/event/info`);
  return response.json();
};
