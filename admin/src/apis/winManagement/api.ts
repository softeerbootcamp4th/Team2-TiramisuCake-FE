import { AuthorizationHeader, BASE_URL } from '@/constants/api';
import {
  PostFCFSWinnerRequest,
  PostRaffleWinnerRequest,
} from '@/type/winManagement/type';

export const getRaffleWinners = async (rank: number) => {
  const res = await fetch(`${BASE_URL}/winner/draw/${rank}`, {
    headers: AuthorizationHeader,
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
  const res = await fetch(`${BASE_URL}/winner/fcfs`, {
    method: 'POST',
    headers: AuthorizationHeader,
    body: JSON.stringify(body),
  });
  return res.json();
};

export const postRaffleWinner = async (body: PostRaffleWinnerRequest) => {
  const res = await fetch(`${BASE_URL}/winner/draw`, {
    method: 'POST', // HTTP 메서드 추가
    headers: AuthorizationHeader,
    body: JSON.stringify(body),
  });
  return res.json();
};

export const getEvents = async () => {
  const res = await fetch(`${BASE_URL}/admin/event`, {
    headers: AuthorizationHeader,
  });
  return res.json();
};
