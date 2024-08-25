import { ResponseType } from '../apiType';

export interface SendCodeRequestBody {
  phoneNumber: string;
}

export interface ConfirmVerificationRequestBody extends SendCodeRequestBody {
  verificationCode: string;
}

export interface LoginRequestBody {
  name: string;
  phoneNumber: string;
  hasCodeVerified: boolean;
  privacyConsent: boolean;
  marketingConsent: boolean;
}

export interface CodeResponse extends ResponseType {
  result?: {
    timeLimit: number;
  };
}

export interface ConfirmResponse extends ResponseType {}

export interface LoginResponse extends ResponseType {
  result?: {
    accessToken: string;
    refreshToken: string;
    expiredTime: string;
  };
}

export interface ReIssueResponse extends LoginResponse {}
