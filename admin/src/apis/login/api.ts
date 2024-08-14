import { BASE_URL, HEADERS } from '@/constants/api';
import { LoginRequest } from '@/type/login/type';

export const postLogin = async ({ account, password }: LoginRequest) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ account: account, password: password }),
  });

  return res.json();
};
