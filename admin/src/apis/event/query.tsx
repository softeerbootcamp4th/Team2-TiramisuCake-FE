import { useMutation } from '@tanstack/react-query';
import { FcFsRequest, DrawRequest } from '@/type/eventManagement/eventType';
import { postDrawData, postFcFsData } from './api';

export const useMutationFcFs = () => {
  const mutation = useMutation({
    mutationKey: ['FcFs'],
    mutationFn: (body: FcFsRequest) => postFcFsData(body),
  });

  return mutation;
};

export const useMutationDraw = () => {
  const mutation = useMutation({
    mutationKey: ['Draw'],
    mutationFn: (body: DrawRequest) => postDrawData(body),
  });

  return mutation;
};
