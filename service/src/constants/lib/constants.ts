import { getCookie } from '@/utils/cookie';

export const ROUTER_PATH = {
  MAIN: '/',
  LOTTERY_LOUNGE: 'lottery-lounge',
  QUIZ_LOUNGE: 'quiz-lounge',
  COMMENTS_LOUNGE: 'comments-lounge',
} as const;

export const HEADERS = {
  'Content-Type': 'application/json',
};

export const BASEURL = `${import.meta.env.VITE_SITE_URL}`;

const accessToken = getCookie('accessToken');
export const AUTHORIZATION_HEADER = {
  ...HEADERS,
  Authorization: `Bearer ${accessToken}`,
};
