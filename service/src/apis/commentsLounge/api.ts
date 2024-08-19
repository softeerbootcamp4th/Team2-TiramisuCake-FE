import { HEADERS } from '@/constants/lib/constants';
import { useCookies } from 'react-cookie';

const baseURL = import.meta.env.VITE_SITE_URL;
export const getComments = async (cursor?: number) => {
  const [cookies] = useCookies(['accessToken', 'refreshToken']);
  const accessToken = cookies.accessToken;

  const headers = {
    ...HEADERS,
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  };
  const url = cursor
    ? `${baseURL}/comment?cursor=${cursor}`
    : `${baseURL}/comment`;
  const res = await fetch(url, {
    method: 'GET',
    headers: headers,
  });
  return res.json();
};

export const getCommentsForScroll = async (
  cursor: number | undefined,
  accessToken: string | undefined
) => {
  const headers = {
    ...HEADERS,
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  };

  const url = cursor
    ? `${baseURL}/comment?cursor=${cursor}`
    : `${baseURL}/comment`;
  const res = await fetch(url, {
    method: 'GET',
    headers: headers,
  });
  return res.json();
};

export const postComment = async (
  commentType: number,
  accessToken: string | undefined
) => {
  const headers = {
    ...HEADERS,
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  };

  const res = await fetch(`${baseURL}/comment?commentType=${commentType}`, {
    method: 'POST',
    headers: headers,
  });
  return res.json();
};
