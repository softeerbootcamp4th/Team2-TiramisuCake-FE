import { useMutation, useQuery } from '@tanstack/react-query';
import { getFCFSEvent, getTutorialFCFSEvent, postAnswer } from './api';

export const useQueryGetFCFSEvent = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['getFCFSEvent'],
    queryFn: getFCFSEvent,
  });
  return {
    data,
    isLoading,
  };
};

export const useQueryGetTutorialFCFSEvent = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['getTutorialFCFSEvent'],
    queryFn: getTutorialFCFSEvent,
  });
  return {
    data,
    isLoading,
  };
};

export const useMutationPostAnswer = () => {
  const mutation = useMutation({
    mutationKey: ['postAnswer'],
    mutationFn: (answerString: string) => postAnswer(answerString),
  });
  return mutation;
};
