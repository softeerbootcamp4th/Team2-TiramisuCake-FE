import { useMutation, useQuery } from '@tanstack/react-query';
import { getFCFSEvent, getTutorialFCFSEvent, postAnswer } from './api';
import { useCookies } from 'react-cookie';

export const useQueryGetFCFSEvent = () => {
  const [cookies] = useCookies(['accessToken', 'refreshToken']);
  const accessToken = cookies.accessToken;

  const { data, isLoading } = useQuery({
    queryKey: ['getFCFSEvent'],
    queryFn: () => getFCFSEvent(accessToken),
  });
  return {
    data,
    isLoading,
  };
};

export const useQueryGetTutorialFCFSEvent = () => {
  const [cookies] = useCookies(['accessToken', 'refreshToken']);
  const accessToken = cookies.accessToken;

  const { data, isLoading } = useQuery({
    queryKey: ['getTutorialFCFSEvent'],
    queryFn: () => getTutorialFCFSEvent(accessToken),
  });
  return {
    data,
    isLoading,
  };
};

export const useMutationPostAnswer = () => {
  const [cookies] = useCookies(['accessToken', 'refreshToken']);
  const accessToken = cookies.accessToken;

  const mutation = useMutation({
    mutationKey: ['postAnswer'],
    mutationFn: (answerString: string) => postAnswer(answerString, accessToken),
  });
  return mutation;
};
