import { useMutation } from '@tanstack/react-query';
import { FcFsRequest, DrawRequest } from '@/type/eventManagement/type';
import { postDrawData, postFcFsData } from './api';
import { useCookies } from 'react-cookie';

export const useMutationFcFs = () => {
  const [cookies] = useCookies(['accessToken', 'refreshToken']);
  const accessToken = cookies.accessToken;
  const mutation = useMutation({
    mutationKey: ['FcFs'],
    mutationFn: (body: FcFsRequest) => postFcFsData(body, accessToken),
  });

  return mutation;
};

export const useMutationDraw = () => {
  const [cookies] = useCookies(['accessToken', 'refreshToken']);
  const accessToken = cookies.accessToken;
  const mutation = useMutation({
    mutationKey: ['Draw'],
    mutationFn: (body: DrawRequest) => postDrawData(body, accessToken),
  });

  return mutation;
};
