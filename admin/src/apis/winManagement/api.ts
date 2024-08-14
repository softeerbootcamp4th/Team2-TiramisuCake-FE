import { BASE_URL } from '@/constants/api';
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
  const accessToken = getCookie('accessToken');
  const res = await fetch(`${BASE_URL}/winner/fcfs/${round}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
};

export const postFCFSWinner = async (fcfsWinnerNum: number) => {
  const accessToken = getCookie('accessToken');
  const res = await fetch(`${BASE_URL}/winner/fcfs`, {
    method: 'POST',
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
  const accessToken = getCookie('accessToken');

  const res = await fetch(`${BASE_URL}/winner/draw`, {
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
  const accessToken = getCookie('accessToken');
  const res = await fetch(`${BASE_URL}/admin/event`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
};
