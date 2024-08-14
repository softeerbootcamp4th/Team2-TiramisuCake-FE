import { getCookie } from '@/utils/cookie';

export const BASE_URL = `${import.meta.env.VITE_SITE_URL}/admin`;

export const HEADERS = { 'Content-Type': 'application/json' };

const accessToken = getCookie('accessToken');

export const AuthorizationHeader = {
  ...HEADERS,
  Authorization: `Bearer ${accessToken}`,
};
