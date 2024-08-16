import {
  AUTHORIZATION_HEADER,
  BASEURL,
  HEADERS,
} from '@/constants/lib/constants';
import {
  SendCodeRequestBody,
  ConfirmVerificationRequestBody,
  LoginRequestBody,
} from '@/types/Authorization/request';

import {
  CodeResponse,
  ConfirmResponse,
  LoginResponse,
  ReIssueResponse,
} from '@/types/Authorization/response';

export const sendAuthCode = async (
  phoneNumber: string
): Promise<CodeResponse> => {
  const requestBody: SendCodeRequestBody = {
    phoneNumber,
  };

  const response = await fetch(`${BASEURL}/verification/send`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(requestBody),
  });

  //const data: codeResponse = await response.json();

  return response.json();
};

export const confirmVerification = async (
  body: ConfirmVerificationRequestBody
): Promise<ConfirmResponse> => {
  const response = await fetch(`${BASEURL}/verification/confirm`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(body),
  });

  //const data: confirmResponse = await response.json();
  return response.json();
};

export const login = async (body: LoginRequestBody): Promise<LoginResponse> => {
  const response = await fetch(`${BASEURL}/login`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(body),
  });

  //const data: loginResponse = await response.json();
  return response.json();
};

export const reissueToken = async (
  refreshToken: string
): Promise<ReIssueResponse> => {
  const response = await fetch(`${BASEURL}/reissue`, {
    method: 'GET',
    headers: {
      ...AUTHORIZATION_HEADER,
      'Authorization-Refresh': refreshToken,
    },
  });

  //const data: ReIssueResponse = await response.json();
  return response.json();
};
