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
import { useCookies } from 'react-cookie';

export const useQueryGetRaffleWinners = (rank: number) => {
  const [cookies] = useCookies(['accessToken', 'refreshToken']);
  const accessToken = cookies.accessToken;
  const { data, isLoading } = useQuery({
    queryKey: ['getRaffleWinners', rank],
    queryFn: () => getRaffleWinners(rank, accessToken),
  });
  return { data, isLoading };
};

export const useQueryGetFCFSWinners = (round: number) => {
  const [cookies] = useCookies(['accessToken', 'refreshToken']);
  const accessToken = cookies.accessToken;
  const { data, isLoading } = useQuery({
    queryKey: ['getFCFSWinners', round],
    queryFn: () => getFCFSWinners(round, accessToken),
  });
  return { data, isLoading };
};

export const useMutationPostFCFSWinner = () => {
  const [cookies] = useCookies(['accessToken', 'refreshToken']);
  const accessToken = cookies.accessToken;
  const mutation = useMutation({
    mutationKey: ['postFCFSWinners'],
    mutationFn: (body: PostFCFSWinnerRequest) =>
      postFCFSWinner(body, accessToken),
  });
  return mutation;
};

export const useMutationPostRaffleWinner = () => {
  const [cookies] = useCookies(['accessToken', 'refreshToken']);
  const accessToken = cookies.accessToken;
  const mutation = useMutation({
    mutationKey: ['postRaffleWinners'],
    mutationFn: (body: PostRaffleWinnerRequest) =>
      postRaffleWinner(body, accessToken),
  });

  return mutation;
};

export const useQueryGetEvents = () => {
  const [cookies] = useCookies(['accessToken', 'refreshToken']);
  const accessToken = cookies.accessToken;
  const { data, isLoading } = useQuery({
    queryKey: ['getEvents'],
    queryFn: () => getEvents(accessToken),
  });
  return { data, isLoading };
};
