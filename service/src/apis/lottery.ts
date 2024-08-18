import { HEADERS } from '@/constants/lib/constants';
import { useCookies } from 'react-cookie';

const baseURL = `${import.meta.env.VITE_SITE_URL}/event`;
const [cookies] = useCookies(['accessToken', 'refreshToken']);
const accessToken = cookies.accessToken;
const refreshToken = cookies.refreshToken;

const headers = {
  ...HEADERS,
  Authorization: `Bearer ${accessToken}`,
};
import { DrawResponse } from '@/types/lottery/response';

export const visitLottery = async (): Promise<DrawResponse> => {
  const response = await fetch(`${baseURL}/draw`, {
    method: 'GET',
    headers: headers,
  });

  const data: DrawResponse = await response.json();

  return data;
};

export const scratchLottery = async () => {
  const response = await fetch(`${baseURL}/draw`, {
    method: 'GET',
    headers: { ...headers, 'Authorization-Refresh': refreshToken },
  });

  const data = await response.json();

  return data;
};

export const showLotteryResult = async (): Promise<DrawResponse> => {
  const response = await fetch(`${baseURL}/result`, {
    method: 'GET',
    headers: headers,
  });
  const data: DrawResponse = await response.json();

  return data;
};
