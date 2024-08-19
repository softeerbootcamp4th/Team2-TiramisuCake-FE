import { BASEURL, HEADERS } from '@/constants/lib/constants';

export const getSharedUrl = async (token?: string) => {
  const headers = {
    ...HEADERS,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const response = await fetch(`${BASEURL}/share-shorten-url`, {
    method: 'GET',
    headers,
  });

  return response.json();
};
