import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';
import { LoginProvider } from '@/store/provider/LoginProvider.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { EventDateProvider } from './store/provider/EventDateProvider.tsx';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LoginProvider>
        <EventDateProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <RouterProvider router={router} />
        </EventDateProvider>
      </LoginProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
