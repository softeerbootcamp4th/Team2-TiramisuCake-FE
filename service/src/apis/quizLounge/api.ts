import { AUTHORIZATION_HEADER, BASEURL } from '@/constants/lib/constants';

export const getFCFSEvent = async () => {
  const res = await fetch(`${BASEURL}/fcfs`, {
    method: 'GET',
    headers: AUTHORIZATION_HEADER,
  });
  return res.json();
};

export const getTutorialFCFSEvent = async () => {
  const res = await fetch(`${BASEURL}/fcfs/tutorial`, {
    method: 'GET',
    headers: AUTHORIZATION_HEADER,
  });
  return res.json();
};

export const postAnswer = async (answerString: string) => {
  const res = await fetch(`${BASEURL}/fcfs`, {
    method: 'POST',
    headers: AUTHORIZATION_HEADER,
    body: JSON.stringify({ answer: answerString }),
  });
  return res.json();
};
