import { createContext, useContext, Dispatch, SetStateAction } from 'react';

interface LoginContextType {
  isLogined: boolean;
  setIsLogined: Dispatch<SetStateAction<boolean>>;
}

const initialLoginContext: LoginContextType = {
  isLogined: false,
  setIsLogined: () => {},
};

export const LoginContext =
  createContext<LoginContextType>(initialLoginContext);

export const useLoginContext = () => useContext(LoginContext);
