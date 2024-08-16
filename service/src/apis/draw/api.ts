const baseURL = `${import.meta.env.VITE_SITE_URL}/event/draw`;

import { HEADERS } from '@/constants/lib/constants';
import {
  DrawAttendanceResponse,
  DrawResultResponse,
} from '@/types/Lottery/response';

export const getDrawAttendance = async (token: string) => {
  const response = await fetch(`${baseURL}`, {
    method: 'GET',
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const getDrawResult = async (token: string) => {
  const response = await fetch(`${baseURL}`, {
    method: 'POST',
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const getDrawHistory = async (token: string) => {
  const response = await fetch(`${baseURL}/history`, {
    method: 'GET',
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};
