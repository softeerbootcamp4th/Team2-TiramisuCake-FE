import { BASEURL, HEADERS } from '@/constants/lib/constants';
import { HistoryResponse } from '@/types/quizLounge/type';

export const getFCFSEvent = async (token: string) => {
  const res = await fetch(`${BASEURL}/fcfs`, {
    method: 'GET',
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

export const getTutorialFCFSEvent = async (token: string) => {
  const res = await fetch(`${BASEURL}/fcfs/tutorial`, {
    method: 'GET',
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

export const postAnswer = async (answerString: string, token: string) => {
  const res = await fetch(`${BASEURL}/fcfs`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ answer: answerString }),
  });
  return res.json();
};

export const getFCFSHistory = async (
  token: string
): Promise<HistoryResponse> => {
  //todo 경로 수정해야 함
  const res = await fetch(`${BASEURL}/fcfs/fcfs/history`, {
    method: 'GET',
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};
