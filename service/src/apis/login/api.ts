import { BASEURL, HEADERS } from '@/constants/lib/constants';
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

export const testAuthCode = async (
  phoneNumber: string
): Promise<CodeResponse> => {
  const requestBody: SendCodeRequestBody = {
    phoneNumber,
  };

  const response = await fetch(`${BASEURL}/verification/send/test`, {
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
  // if (!response.ok) {
  //   if (response.status === 401) {
  //     throw new Error('Unauthorized'); // 401 에러일 경우 에러 메시지와 함께 에러를 던짐
  //   } else if (response.status === 500) {
  //     throw new Error('Internal Server Error'); // 500 에러일 경우
  //   } else {
  //     throw new Error(`Error: ${response.status} ${response.statusText}`);
  //   }
  // }
  //const data: confirmResponse = await response.json();
  return response.json();
};

export const login = async (
  body: LoginRequestBody,
  shareCode?: string
): Promise<LoginResponse> => {
  const headers = { ...HEADERS } as { [key: string]: string };

  if (shareCode) {
    headers['X-Share-Code'] = shareCode;
  }

  const response = await fetch(`${BASEURL}/login`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  });

  //const data: loginResponse = await response.json();
  return response.json();
};

export const reissueToken = async (
  accessToken: string,
  refreshToken: string
): Promise<ReIssueResponse> => {
  const response = await fetch(`${BASEURL}/reissue`, {
    method: 'GET',
    headers: {
      ...HEADERS,
      Authorization: accessToken,
      'Authorization-Refresh': refreshToken,
    },
  });

  //const data: ReIssueResponse = await response.json();
  return response.json();
};
