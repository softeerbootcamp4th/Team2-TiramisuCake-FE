import {
  LoginModalState,
  LoginAction,
  LOGIN_ACTION,
} from '../types/loginModalTypes';

export const loginModalReducer = (
  state: LoginModalState,
  action: LoginAction
): LoginModalState => {
  switch (action.type) {
    case LOGIN_ACTION.SET_VERIFICATION_CODE:
      return { ...state, verificationCode: action.payload };
    case LOGIN_ACTION.SET_VERIFIED:
      return {
        ...state,
        isVerified: action.payload,
        allValid: action.payload && state.isChecked,
      };
    case LOGIN_ACTION.SET_CHECKED:
      return {
        ...state,
        isChecked: action.payload,
        allValid: action.payload && state.isVerified,
      };
    case LOGIN_ACTION.SET_MARKETING_CHECKED:
      return { ...state, marketingChecked: action.payload };
    case LOGIN_ACTION.SET_NAME:
      return { ...state, name: action.payload };
    case LOGIN_ACTION.SET_PHONE_NUMBER:
      return { ...state, phoneNumber: action.payload };
    default:
      return state;
  }
};
