import { createContext, useContext } from 'react';

interface UrlContextType {
  url: string;
  setUrl: (url: string) => void;
}

export const UrlContext = createContext<UrlContextType>({
  url: '',
  setUrl: () => {},
});

export const useUrl = () => {
  const context = useContext(UrlContext);
  if (!context) {
    throw new Error('useUrl must be used within a UrlProvider');
  }
  return context;
};
