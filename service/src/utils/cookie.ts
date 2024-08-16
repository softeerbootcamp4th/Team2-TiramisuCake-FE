import { Cookies } from 'react-cookie';

const cookies = new Cookies();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setCookie = (name: string, value: string, option?: any) => {
  return cookies.set(name, value, { ...option });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};
