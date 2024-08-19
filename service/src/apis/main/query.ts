import { useQuery } from '@tanstack/react-query';
import {
  getCarDetailInfo,
  getStaticEventInfo,
  getDynamicEventInfo,
} from './api';
import {
  StaticEventInfoResponse,
  DynamicEventInfoResponse,
} from '@/types/main/eventInfoType';

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

export const useStaticEventInfo = () => {
  const { data: staticData, isLoading: isStaticLoading } =
    useQuery<StaticEventInfoResponse>({
      queryKey: ['staticEventInfo'],
      queryFn: getStaticEventInfo,
    });

  return { staticData, isStaticLoading };
};

export const useDynamicEventInfo = () => {
  const { data: dynamicData, isLoading: isDynamicLoading } =
    useQuery<DynamicEventInfoResponse>({
      queryKey: ['dynamicEventInfo'],
      queryFn: getDynamicEventInfo,
    });

  return { dynamicData, isDynamicLoading };
};
