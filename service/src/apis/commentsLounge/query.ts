import { useMutation, useQuery } from '@tanstack/react-query';
import { getComments, postComment } from './api';
import { useCookies } from 'react-cookie';

export const useQueryGetComments = (cursor?: number) => {
  const [cookies] = useCookies(['accessToken', 'refreshToken']);
  const accessToken = cookies.accessToken;

  const { isLoading, data } = useQuery({
    queryKey: ['getComments', cursor],
    queryFn: () => getComments(cursor),
  });
  return { isLoading, data };
};

export const useMutationPostComment = () => {
  const [cookies] = useCookies(['accessToken', 'refreshToken']);
  const accessToken = cookies.accessToken;
  const mutation = useMutation({
    mutationKey: ['postComment'],
    mutationFn: (commentType: number) => postComment(commentType, accessToken),
  });
  return mutation;
};
