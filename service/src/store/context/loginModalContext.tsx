import React, { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { loginAction, loginModalState } from '../types/loginModalTypes';
import { loginModalReducer } from '../reducer/loginModalReducer';

const initialState: loginModalState = {
  name: '',
  phoneNumber: '',
  verificationCode: '',
  isVerified: false,
  isChecked: false,
  marketingChecked: false,
  allValid: false,
};

export const LoginModalStateContext = createContext<loginModalState | null>(
  null
);
export const LoginModalDispatchContext =
  createContext<Dispatch<loginAction> | null>(null);

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
