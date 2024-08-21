import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import LoginPage from './pages/LoginPage';
import EventManagementPage from './pages/EventManagementPage';
import WinManagementPage from './pages/WinManagementPage';
import EventMetricsPage from './pages/EventMetricsPage';
import { ROUTER_PATH } from './lib/constants';
import MainPage from './pages/MainPage';
import ProtectedRoute from './components/common/ProtectedRoute';
import ErrorPage from './pages/ErrorPage';
import NotFoundPage from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <LoginPage />,
        index: true,
      },
      {
        element: <ProtectedRoute />,
        errorElement: <ErrorPage />,
        children: [
          {
            element: <MainPage />,
            path: ROUTER_PATH.MAIN,
          },
          {
            element: <EventManagementPage />,
            path: ROUTER_PATH.EVENT_MANAGE,
          },
          {
            element: <WinManagementPage />,
            path: ROUTER_PATH.WIN_MANAGE,
          },
          {
            element: <EventMetricsPage />,
            path: ROUTER_PATH.EVENT_METRICS,
          },
        ],
      },
      { element: <NotFoundPage />, path: '*' },
    ],
  },
]);
