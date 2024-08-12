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
