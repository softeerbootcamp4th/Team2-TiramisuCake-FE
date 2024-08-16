import { HEADERS } from '@/constants/lib/constants';

const baseURL = `${import.meta.env.VITE_SITE_URL}`;

export const getSharedUrl = async (token?: string) => {
  const headers = {
    ...HEADERS,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const response = await fetch(`${baseURL}/share-shorten-url`, {
    method: 'GET',
    headers,
  });

  return response.json();
};
