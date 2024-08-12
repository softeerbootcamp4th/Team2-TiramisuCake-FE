import { HEADERS } from '@/constants/lib/constants';

const baseURL = import.meta.env.VITE_SITE_URL;
export const getComments = async (cursor?: number) => {
  const url = cursor
    ? `${baseURL}/comment?cursor=${cursor}`
    : `${baseURL}/comment`;
  const res = await fetch(url, {
    method: 'GET',
    headers: HEADERS,
  });
  return res.json();
};

export const postComment = async (commentType: number) => {
  const res = await fetch(`${baseURL}/comment?commentType=${commentType}`, {
    method: 'POST',
    headers: HEADERS,
  });
  return res.json();
};
