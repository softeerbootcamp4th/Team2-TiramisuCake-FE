import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getEvents,
  getFCFSWinners,
  getRaffleWinners,
  postFCFSWinner,
  postRaffleWinner,
} from './api';

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
    mutationFn: (fcfsWinnerNum: number) => postFCFSWinner(fcfsWinnerNum),
  });
  return mutation;
};

export const useMutationPostRaffleWinner = () => {
  const mutation = useMutation({
    mutationKey: ['postRaffleWinners'],
    mutationFn: ({
      firstWinnerNum,
      secondWinnerNum,
      thirdWinnerNum,
    }: {
      firstWinnerNum: number;
      secondWinnerNum: number;
      thirdWinnerNum: number;
    }) => postRaffleWinner({ firstWinnerNum, secondWinnerNum, thirdWinnerNum }),
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
