import { HEADERS } from '@/constants/lib/constants';

export interface RequestType<T> {
  url: string;
  method: methodType;
  params?: string;
  queryParams?: Record<string, string>;
  body?: T;
}
export interface UseFetchOptions {
  method: methodType;
  params?: Record<string, string | number>;
  queryParams?: Record<string, string | number>;
  body?: BodyInit | null;
  headers?: typeof HEADERS;
}

export type methodType = 'GET' | 'POST' | 'PUT' | 'DELETE';
