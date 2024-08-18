import { useMutation, useQuery } from '@tanstack/react-query';
import { getDrawAttendance, getDrawResult, getDrawHistory } from './api';

export const useQueryGetDrawAttendance = (token: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['getDrawAttendance', token],
    queryFn: () => getDrawAttendance(token),
  });
  return {
    data,
    isLoading,
  };
};

export const useMutationDrawData = (token: string) => {
  const mutation = useMutation({
    mutationKey: ['drawData', token],
    mutationFn: () => getDrawResult(token),
  });

  return mutation;
};

export const useQueryGetDrawHistory = (token: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['getDrawHistory', token],
    queryFn: () => getDrawHistory(token),
  });
  return {
    data,
    isLoading,
  };
};
