import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';
import { LoginProvider } from '@/store/provider/LoginProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginProvider>
      <RouterProvider router={router} />
    </LoginProvider>
  </React.StrictMode>
);
