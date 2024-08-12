import { HEADERS } from '@/constants/lib/constants';

const baseURL = import.meta.env.VITE_SITE_URL;
export const getComments = async (cursor?: number) => {
  const res = await fetch(`${baseURL}/comments?cursor=${cursor}`, {
    method: 'GET',
    headers: HEADERS,
  });
  return res.json();
};

export const postComment = async (commentType: number) => {
  const res = await fetch(`${baseURL}/comments?commentType=${commentType}`, {
    method: 'POST',
    headers: HEADERS,
  });
  return res.json();
};
