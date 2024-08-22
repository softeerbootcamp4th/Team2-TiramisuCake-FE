import { HEADERS, BASEURL } from '@/constants/lib/constants';

const baseURL = `${BASEURL}/event/draw`;
import {
  DrawAttendanceResponse,
  DrawHistoryResponse,
  DrawResultResponse,
} from '@/types/lottery/type';

export const getDrawAttendance = async (
  token: string
): Promise<DrawAttendanceResponse> => {
  const response = await fetch(`${baseURL}`, {
    method: 'GET',
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const getDrawResult = async (
  token: string
): Promise<DrawResultResponse> => {
  const response = await fetch(`${baseURL}`, {
    method: 'POST',
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const getDrawHistory = async (
  token: string
): Promise<DrawHistoryResponse> => {
  const response = await fetch(`${baseURL}/history`, {
    method: 'GET',
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};
