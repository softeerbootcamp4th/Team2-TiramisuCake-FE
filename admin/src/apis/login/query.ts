import { useMutation } from '@tanstack/react-query';
import { postLogin } from './api';

export const useMutationPostLogin = () => {
  const mutation = useMutation({
    mutationKey: ['postLogin'],
    mutationFn: ({
      account,
      password,
    }: {
      account: string;
      password: string;
    }) => postLogin(account, password),
  });

  return mutation;
};
