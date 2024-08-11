export interface loginModalState {
  name: string;
  phoneNumber: string;
  verificationCode: string;
  isVerified: boolean;
  isChecked: boolean;
  marketingChecked: boolean;
  allValid: boolean;
}

export type loginAction =
  | { type: LOGIN_ACTION.SET_VERIFIED; payload: boolean }
  | { type: LOGIN_ACTION.SET_CHECKED; payload: boolean }
  | { type: LOGIN_ACTION.SET_MARKETING_CHECKED; payload: boolean }
  | { type: LOGIN_ACTION.SET_NAME; payload: string }
  | { type: LOGIN_ACTION.SET_PHONE_NUMBER; payload: string }
  | { type: LOGIN_ACTION.SET_VERIFICATION_CODE; payload: string };

export enum LOGIN_ACTION {
  SET_VERIFIED = 'SET_VERIFIED',
  SET_CHECKED = 'SET_CHECKED',
  SET_MARKETING_CHECKED = 'SET_MARKETING_CHECKED',
  SET_NAME = 'SET_NAME',
  SET_PHONE_NUMBER = 'SET_PHONE_NUMBER',
  SET_VERIFICATION_CODE = 'SET_VERIFICATION_CODE',
}
