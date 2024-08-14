import { useMutation } from '@tanstack/react-query';
import { postLogin } from './api';
import { LoginRequest } from '@/type/login/type';

export const useMutationPostLogin = () => {
  const mutation = useMutation({
    mutationKey: ['postLogin'],
    mutationFn: (body: LoginRequest) => postLogin(body),
  });

  return mutation;
};
