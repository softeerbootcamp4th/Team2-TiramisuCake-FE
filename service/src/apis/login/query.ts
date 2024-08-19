import { useMutation, useQuery } from '@tanstack/react-query';
import {
  ConfirmVerificationRequestBody,
  LoginRequestBody,
} from '@/types/Authorization/request';

import { sendAuthCode, confirmVerification, login, reissueToken } from './api';

export const useMutationCode = () => {
  const mutation = useMutation({
    mutationKey: ['sendCode'],
    mutationFn: (phoneNumber: string) => sendAuthCode(phoneNumber),
  });

  return mutation;
};

export const useMutationCodeVerification = () => {
  const mutation = useMutation({
    mutationKey: ['codeVerification'],
    mutationFn: (body: ConfirmVerificationRequestBody) =>
      confirmVerification(body),
  });

  return mutation;
};

export const useMutationLogin = () => {
  const mutation = useMutation({
    mutationKey: ['login'],
    mutationFn: (body: LoginRequestBody) => login(body),
  });

  return mutation;
};

export const useQueryReIssueToken = (refreshToken: string) => {
  const queryKey = ['reissueToken', refreshToken];

  const { data, isLoading } = useQuery({
    queryKey,
    queryFn: () => reissueToken(refreshToken),
  });

  return {
    data,
    isLoading,
  };
};
