import { AuthorizationHeader, BASE_URL } from '@/constants/api';
import {
  PostFCFSWinnerRequest,
  PostRaffleWinnerRequest,
} from '@/type/winManagement/type';
import { getCookie } from '@/utils/cookie';

export const getRaffleWinners = async (rank: number) => {
  const accessToken = getCookie('accessToken');
  const res = await fetch(`${BASE_URL}/winner/draw/${rank}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
};

export const getFCFSWinners = async (round: number) => {
  const res = await fetch(`${BASE_URL}/winner/fcfs/${round}`, {
    headers: AuthorizationHeader,
  });
  return res.json();
};

export const postFCFSWinner = async (body: PostFCFSWinnerRequest) => {
  const accessToken = getCookie('accessToken');
  const res = await fetch(`${BASE_URL}/winner/fcfs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(body),
  });
  return res.json();
};

export const postRaffleWinner = async (body: PostRaffleWinnerRequest) => {
  const accessToken = getCookie('accessToken');

  const res = await fetch(`${BASE_URL}/winner/draw`, {
    method: 'POST', // HTTP 메서드 추가
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(body),
  });
  return res.json();
};

export const getEvents = async () => {
  const accessToken = getCookie('accessToken');
  const res = await fetch(`${BASE_URL}/admin/event`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
};
