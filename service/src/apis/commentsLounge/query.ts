import { useMutation, useQuery } from '@tanstack/react-query';
import { getComments, postComment } from './api';

export const useQueryGetComments = (cursor?: number) => {
  const { isLoading, data } = useQuery({
    queryKey: ['getComments', cursor],
    queryFn: () => getComments(cursor),
    refetchInterval: 2000,
  });
  return { isLoading, data };
};

export const useMutationPostComment = () => {
  const mutation = useMutation({
    mutationKey: ['postComment'],
    mutationFn: (commentType: number) => postComment(commentType),
  });
  return mutation;
};
