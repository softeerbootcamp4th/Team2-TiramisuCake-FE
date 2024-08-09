import { useState, ReactNode, useEffect } from 'react';
import { LoginContext } from '../context/useLoginContext';

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [isLogined, setIsLogined] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('Token');

    if (storedToken) {
      setIsLogined(true); // - 이후 api 설계시 리팩토링
    }
  }, []);

  return (
    <LoginContext.Provider value={{ isLogined, setIsLogined }}>
      {children}
    </LoginContext.Provider>
  );
};
