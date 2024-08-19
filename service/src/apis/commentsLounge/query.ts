import { useInfiniteQuery, useMutation } from '@tanstack/react-query';
import { getCommentsForScroll, postComment } from './api';
import { useCookies } from 'react-cookie';
import { CommentsResponseType } from '@/types/comment/type';

export const useInfiniteQueryGetComments = () => {
  const [cookies] = useCookies(['accessToken', 'refreshToken']);
  const accessToken = cookies.accessToken;

  const { data, fetchNextPage, hasNextPage, refetch } =
    useInfiniteQuery<CommentsResponseType>({
      queryKey: ['comments'],
      queryFn: ({ pageParam }) =>
        getCommentsForScroll(pageParam as undefined | number, accessToken),
      initialPageParam: undefined,
      getNextPageParam: (lastPage) => {
        return lastPage.result.nextCursor !== -1
          ? lastPage.result.nextCursor
          : undefined;
      },
    });

  return { data, fetchNextPage, hasNextPage, refetch };
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
