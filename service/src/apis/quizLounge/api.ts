import { HEADERS } from '@/constants/lib/constants';

const baseURL = `${import.meta.env.VITE_SITE_URL}`;
const accessToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTMsInJvbGVUeXBlIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzIzNzcwNzE5LCJleHAiOjE3MjQwMjk5MTl9.8IoWWs9D5UuCV1VMzNikwo2EkQL3tQeOUVap4irXvXqICqtY1CyIUYQPkTrL94Lz6fycU6wa_ET3V1r13HTYLw';
export const getFCFSEvent = async () => {
  const res = await fetch(`${baseURL}/fcfs`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
};

export const getTutorialFCFSEvent = async () => {
  const res = await fetch(`${baseURL}/fcfs/tutorial`, {
    method: 'GET',
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
};

export const postAnswer = async (answerString: string) => {
  const res = await fetch(`${baseURL}/fcfs?answer='${answerString}'`, {
    method: 'POST',
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
};
