import { useState, ReactNode, useEffect } from 'react';
import { UrlContext } from '../context/useUrl';
import { getCookie } from '@/utils/cookie';
import { useQueryGetSharedUrl } from '@/apis/shareurl/query';

export const UrlProvider = ({ children }: { children: ReactNode }) => {
  const [url, setUrl] = useState('');
  const [header, setHeader] = useState('');
  const accessToken = getCookie('accessToken');
  useEffect(() => {
    if (accessToken !== undefined) {
      setHeader(accessToken);
    }
  }, [accessToken]);

  const { data } = useQueryGetSharedUrl(header);

  useEffect(() => {
    if (data?.isSuccess) {
      setUrl(data.result.shareUrl);
    }
  }, [data, accessToken]);

  return (
    <UrlContext.Provider value={{ url, setUrl }}>
      {children}
    </UrlContext.Provider>
  );
};
