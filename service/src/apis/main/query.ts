import { useQuery } from '@tanstack/react-query';
import { getCarDetailInfo } from './api';

export const useQueryGetCarDetailInfo = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['getCarDetailInfo'],
    queryFn: getCarDetailInfo,
  });
  return {
    data,
    isLoading,
  };
};
