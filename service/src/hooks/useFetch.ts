import { useState, useEffect } from 'react';
import { UseFetchOptions } from '@/types/apiType';

interface Response<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

function useFetch<T>(
  url: string,
  { method, params, queryParams, body, headers }: UseFetchOptions
): Response<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      let fullUrl = url;
      if (params) {
        Object.keys(params).forEach((key) => {
          fullUrl = fullUrl.replace(`/${key}`, String(params[key]));
        });
      }

      if (queryParams) {
        const queryString = new URLSearchParams(
          queryParams as Record<string, string>
        ).toString();
        fullUrl += `?${queryString}`;
      }

      try {
        const response = await fetch(fullUrl, {
          method,
          headers,
          body: method !== 'GET' && body ? JSON.stringify(body) : null,
        });

        if (!response.ok) {
          throw new Error(`HTTP status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, params, queryParams, body, headers]);

  return { data, error, loading };
}

export default useFetch;
