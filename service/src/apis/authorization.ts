import { HEADERS } from '@/constants/lib/constants';
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

const baseURL = `${import.meta.env.VITE_SITE_URL}`;

export const sendAuthCode = async (
  phoneNumber: string
): Promise<CodeResponse> => {
  const requestBody: SendCodeRequestBody = {
    phoneNumber,
  };

  const response = await fetch(`${baseURL}/verification/send`, {
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
  const response = await fetch(`${baseURL}/verification/confirm`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(body),
  });

  //const data: confirmResponse = await response.json();
  return response.json();
};

export const login = async (body: LoginRequestBody): Promise<LoginResponse> => {
  const response = await fetch(`${baseURL}/login`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(body),
  });

  //const data: loginResponse = await response.json();
  return response.json();
};

export const reissueToken = async (
  accessToken: string,
  refreshToken: string
): Promise<ReIssueResponse> => {
  const response = await fetch(`${baseURL}/reissue`, {
    method: 'GET',
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${accessToken}`,
      'Authorization-Refresh': refreshToken,
    },
  });

  const data: ReIssueResponse = await response.json();
  return data;
};
