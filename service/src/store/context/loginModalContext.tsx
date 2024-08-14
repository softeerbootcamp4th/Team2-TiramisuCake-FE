import React, { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { LoginAction, LoginModalState } from '../types/loginModalTypes';
import { loginModalReducer } from '../reducer/loginModalReducer';

const initialState: LoginModalState = {
  name: '',
  phoneNumber: '',
  verificationCode: '',
  isVerified: false,
  isChecked: false,
  marketingChecked: false,
  allValid: false,
};

export const LoginModalStateContext = createContext<LoginModalState | null>(
  null
);
export const LoginModalDispatchContext =
  createContext<Dispatch<LoginAction> | null>(null);

export const LoginModalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(loginModalReducer, initialState);

  return (
    <LoginModalStateContext.Provider value={state}>
      <LoginModalDispatchContext.Provider value={dispatch}>
        {children}
      </LoginModalDispatchContext.Provider>
    </LoginModalStateContext.Provider>
  );
};
