import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';
import { LoginProvider } from '@/store/provider/LoginProvider.tsx';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { EventDateProvider } from './store/provider/EventDateProvider.tsx';
import { ModalProvider } from './store/provider/ModalProvider.tsx';
import { useApiError } from './hooks/useApiError.tsx';
import { UrlProvider } from './store/provider/UrlProvider.tsx';

const Main = () => {
  const { handleError } = useApiError();
  //error 발생 시 custom handler 호출
  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: {
        onError: handleError,
      },
    },
    queryCache: new QueryCache({
      onError: handleError,
    }),
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <LoginProvider>
          <UrlProvider>
            <EventDateProvider>
              <ReactQueryDevtools initialIsOpen={false} />
              <RouterProvider router={router} />
            </EventDateProvider>
          </UrlProvider>
        </LoginProvider>
      </ModalProvider>
    </QueryClientProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
