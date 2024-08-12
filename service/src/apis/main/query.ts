import { useQuery } from '@tanstack/react-query';
import { getCarDetailInfo } from './api';
import { getEventInfo } from '@/apis/eventInfo';
import { EventInfoResponse } from '@/store/types/eventInfoTypes';

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

export const useEventInfo = () => {
  const { data, isLoading } = useQuery<EventInfoResponse>({
    queryKey: ['eventInfo'],
    queryFn: getEventInfo,
  });

  return { data, isLoading };
};
