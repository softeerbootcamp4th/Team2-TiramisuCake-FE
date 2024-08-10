import { HEADERS } from '@/constants/lib/constants';
import {
  getCodeRequestBody,
  confirmVerificationRequestBody,
  loginRequestBody,
} from '@/types/Authorization/request';

import {
  codeResponse,
  confirmResponse,
  loginResponse,
  reIssueResponse,
} from '@/types/Authorization/response';

export const getAuthCode = async (
  phoneNumber: string
): Promise<codeResponse> => {
  const requestBody: getCodeRequestBody = {
    phoneNumber,
  };

  const response = await fetch(`api/verification/send`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(requestBody),
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const data: codeResponse = await response.json();

  return data;
};

export const confirmVerification = async (
  body: confirmVerificationRequestBody
): Promise<confirmResponse> => {
  const response = await fetch('/api/verification/confirm', {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data: confirmResponse = await response.json();
  return data;
};

export const login = async (body: loginRequestBody): Promise<loginResponse> => {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data: loginResponse = await response.json();
  return data;
};

export const reissueToken = async (
  accessToken: string,
  refreshToken: string
): Promise<reIssueResponse> => {
  const response = await fetch('/api/reissue', {
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
