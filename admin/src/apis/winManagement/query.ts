import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getEvents,
  getFCFSWinners,
  getRaffleWinners,
  postFCFSWinner,
  postRaffleWinner,
} from './api';
import {
  PostFCFSWinnerRequest,
  PostRaffleWinnerRequest,
} from '@/type/winManagement/type';

export const useQueryGetRaffleWinners = (rank: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['getRaffleWinners', rank],
    queryFn: () => getRaffleWinners(rank),
  });
  return { data, isLoading };
};

export const useQueryGetFCFSWinners = (round: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['getFCFSWinners', round],
    queryFn: () => getFCFSWinners(round),
  });
  return { data, isLoading };
};

export const useMutationPostFCFSWinner = () => {
  const mutation = useMutation({
    mutationKey: ['postFCFSWinners'],
    mutationFn: (body: PostFCFSWinnerRequest) => postFCFSWinner(body),
  });
  return mutation;
};

export const useMutationPostRaffleWinner = () => {
  const mutation = useMutation({
    mutationKey: ['postRaffleWinners'],
    mutationFn: (body: PostRaffleWinnerRequest) => postRaffleWinner(body),
  });

  return mutation;
};

export const useQueryGetEvents = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['getEvents'],
    queryFn: getEvents,
  });
  return { data, isLoading };
};
