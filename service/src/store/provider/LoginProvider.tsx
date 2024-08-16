import { useState, ReactNode, useEffect } from 'react';
import { LoginContext } from '../context/useLoginContext';
import { useCookies } from 'react-cookie';

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [isLogined, setIsLogined] = useState(false);
  const [cookies] = useCookies(['accessToken']);

  useEffect(() => {
    const accessToken = cookies.accessToken;

    if (accessToken) {
      setIsLogined(true);
    }
  }, [cookies.accessToken]);

  return (
    <LoginContext.Provider value={{ isLogined, setIsLogined }}>
      {children}
    </LoginContext.Provider>
  );
};
