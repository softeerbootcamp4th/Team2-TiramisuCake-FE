import { BASE_URL } from '@/constants/api';

export const postLogin = async (account: string, password: string) => {
  const res = await fetch(`${BASE_URL}/admin/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ account: account, password: password }),
  });

  return res.json();
};
