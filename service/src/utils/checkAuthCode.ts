export const checkAuthCode = (code: string): boolean => {
  const regex = /^[a-zA-Z0-9]{6}$/;
  return regex.test(code);
};
