import { HEADERS } from '@/constants/lib/constants';
import {
  sendCodeRequestBody,
  confirmVerificationRequestBody,
  loginRequestBody,
} from '@/types/authorization/request';

import {
  codeResponse,
  confirmResponse,
  loginResponse,
  reIssueResponse,
} from '@/types/authorization/response';

const baseURL = `${import.meta.env.VITE_SITE_URL}`;

export const sendAuthCode = async (
  phoneNumber: string
): Promise<codeResponse> => {
  const requestBody: sendCodeRequestBody = {
    phoneNumber,
  };

  const response = await fetch(`${baseURL}/verification/send`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(requestBody),
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  //const data: codeResponse = await response.json();

  return response.json();
};

export const confirmVerification = async (
  body: confirmVerificationRequestBody
): Promise<confirmResponse> => {
  const response = await fetch(`${baseURL}/verification/confirm`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  //const data: confirmResponse = await response.json();
  return response.json();
};

export const login = async (body: loginRequestBody): Promise<loginResponse> => {
  const response = await fetch(`${baseURL}/login`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  //const data: loginResponse = await response.json();
  return response.json();
};

export const reissueToken = async (
  accessToken: string,
  refreshToken: string
): Promise<reIssueResponse> => {
  const response = await fetch(`${baseURL}/reissue`, {
    method: 'GET',
    headers: {
      ...HEADERS,
      Authorization: `Bearer ${accessToken}`,
      'Authorization-Refresh': refreshToken,
    },
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data: reIssueResponse = await response.json();
  return data;
};
