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

export type CodeResponse = {
  isSuccess: boolean;
  code: string;
  message: string;
  result?: {
    timeLimit: number;
  };
};

export interface ConfirmResponse {
  isSuccess: boolean;
  code: string;
  message: string;
}

export interface LoginResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result?: {
    accessToken: string;
    refreshToken: string;
    expiredTime: string;
  };
}

export interface ReIssueResponse extends LoginResponse {}
