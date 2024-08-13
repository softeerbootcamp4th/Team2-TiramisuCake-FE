import { BASE_URL } from '@/constants/api';
import { getCookie } from '@/utils/cookie';
const accessToken = getCookie('accessToken');

export const getRaffleWinners = async (round: number) => {
  const res = await fetch(`${BASE_URL}/winner/draw/${round}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
};

export const getFCFSWinners = async (round: number) => {
  const res = await fetch(`${BASE_URL}/winner/fcfs/${round}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
};

export const postFCFSWinner = async (fcfsWinnerNum: number) => {
  const res = await fetch(`${BASE_URL}/winner/fcfs`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ fcfsWinnerNum: fcfsWinnerNum }),
  });
  return res.json();
};

export const postRaffleWinner = async ({
  firstWinnerNum,
  secondWinnerNum,
  thirdWinnerNum,
}: {
  firstWinnerNum: number;
  secondWinnerNum: number;
  thirdWinnerNum: number;
}) => {
  const res = await fetch(`${BASE_URL}/winner/fcfs`, {
    method: 'POST', // HTTP 메서드 추가
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      firstWinnerNum,
      secondWinnerNum,
      thirdWinnerNum,
    }),
  });
  return res.json();
};

export const getEvents = async () => {
  const res = await fetch(`${BASE_URL}/admin/event`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
};
