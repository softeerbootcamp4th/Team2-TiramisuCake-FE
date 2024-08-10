export interface getCodeRequestBody {
  phoneNumber: string;
}

export interface confirmVerificationRequestBody extends getCodeRequestBody {
  phoneNumber: string;
  verificationCode: string;
}

export interface loginRequestBody {
  name: string;
  phoneNumber: string;
  hasCodeVerified: boolean;
  privacyConsent: boolean;
  marketingConsent: boolean;
}
