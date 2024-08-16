import { useQuery } from '@tanstack/react-query';
import { getSharedUrl } from './api';

export const useQueryGetSharedUrl = (token?: string) => {
  const { data, isLoading } = useQuery({
    queryKey: token ? ['sharedUrl', token] : ['sharedUrl'],
    queryFn: () => getSharedUrl(token),
  });

  return {
    data,
    isLoading,
  };
};
