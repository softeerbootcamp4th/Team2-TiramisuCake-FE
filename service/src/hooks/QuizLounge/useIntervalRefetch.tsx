import { useEffect } from 'react';
import {
  RefetchOptions,
  QueryObserverResult,
  InfiniteData,
} from '@tanstack/react-query';
import { CommentsResponseType } from '@/types/comment/type';

interface Props {
  refetch: (
    options?: RefetchOptions
  ) => Promise<
    QueryObserverResult<InfiniteData<CommentsResponseType, unknown>, Error>
  >;
}

const useIntervalRefetch = ({ refetch }: Props) => {
  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 2000);

    return () => clearInterval(interval);
  }, [refetch]);
};

export default useIntervalRefetch;
