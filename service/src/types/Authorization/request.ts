export interface sendCodeRequestBody {
  phoneNumber: string;
}

export interface confirmVerificationRequestBody extends sendCodeRequestBody {
  verificationCode: string;
}

export interface loginRequestBody {
  name: string;
  phoneNumber: string;
  hasCodeVerified: boolean;
  privacyConsent: boolean;
  marketingConsent: boolean;
}
