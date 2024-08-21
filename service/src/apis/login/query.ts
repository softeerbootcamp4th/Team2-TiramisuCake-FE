import { useMutation, useQuery } from '@tanstack/react-query';
import {
  ConfirmVerificationRequestBody,
  LoginRequestBody,
} from '@/types/Authorization/request';

import {
  sendAuthCode,
  confirmVerification,
  login,
  reissueToken,
  testAuthCode,
} from './api';

export const useMutationCode = () => {
  const mutation = useMutation({
    mutationKey: ['sendCode'],
    mutationFn: (phoneNumber: string) => sendAuthCode(phoneNumber),
  });

  return mutation;
};

export const useMutationTestCode = () => {
  const mutation = useMutation({
    mutationKey: ['testCode'],
    mutationFn: (phoneNumber: string) => testAuthCode(phoneNumber),
    retry: false,
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
    mutationFn: (body: LoginRequestBody) => {
      const shareCode = localStorage.getItem('shareCode');
      if (shareCode) {
        //조건문 - promise 반환
        return login(body, shareCode);
      } else {
        return login(body);
      }
    },
  });

  return mutation;
};

export const useQueryReIssueToken = (
  accessToken: string,
  refreshToken: string
) => {
  const queryKey = ['reissueToken', accessToken, refreshToken];

  const { data, isLoading } = useQuery({
    queryKey,
    queryFn: () => reissueToken(accessToken, refreshToken),
  });

  return {
    data,
    isLoading,
  };
};
