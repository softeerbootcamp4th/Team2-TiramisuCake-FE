import { BASEURL, HEADERS } from '@/constants/lib/constants';

export const getCommentsForScroll = async (
  cursor: number | undefined,
  accessToken: string | undefined
) => {
  const headers = {
    ...HEADERS,
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  };

  const url = cursor
    ? `${BASEURL}/comment?cursor=${cursor}`
    : `${BASEURL}/comment`;
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

  const res = await fetch(`${BASEURL}/comment?commentType=${commentType}`, {
    method: 'POST',
    headers: headers,
  });
  return res.json();
};
