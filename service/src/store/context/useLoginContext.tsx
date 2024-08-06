import { createContext, useContext } from 'react';

interface LoginContextType {
  isLogined: boolean;
  setIsLogined: (value: boolean) => void;
}

const initialLoginContext: LoginContextType = {
  isLogined: false,
  setIsLogined: () => {},
};

export const LoginContext =
  createContext<LoginContextType>(initialLoginContext);

export const useLoginContext = () => useContext(LoginContext);
