import { BASEURL, HEADERS } from '@/constants/lib/constants';

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
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ answer: answerString }),
  });
  return res.json();
};
