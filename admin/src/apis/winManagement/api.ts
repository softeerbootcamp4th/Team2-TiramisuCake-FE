import { BASE_URL, HEADERS } from '@/constants/api';
import {
  PostFCFSWinnerRequest,
  PostRaffleWinnerRequest,
} from '@/type/winManagement/type';

export const getRaffleWinners = async (rank: number, token: string) => {
  const res = await fetch(`${BASE_URL}/winner/draw/${rank}`, {
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

export const getFCFSWinners = async (round: number, token: string) => {
  const res = await fetch(`${BASE_URL}/winner/fcfs/${round}`, {
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

export const postFCFSWinner = async (
  body: PostFCFSWinnerRequest,
  token: string
) => {
  const res = await fetch(`${BASE_URL}/winner/fcfs`, {
    method: 'POST',
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
  return res.json();
};

export const postRaffleWinner = async (
  body: PostRaffleWinnerRequest,
  token: string
) => {
  const res = await fetch(`${BASE_URL}/winner/draw`, {
    method: 'POST', // HTTP 메서드 추가
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
  return res.json();
};

export const getEvents = async (token: string) => {
  const res = await fetch(`${BASE_URL}/admin/event`, {
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};
