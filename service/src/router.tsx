import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainPage from './pages/MainPage';
import LotteryLoungePage from './pages/LotteryLounge';
import { ROUTER_PATH } from './constants/lib/constants';
import QuizLoungePage from './pages/QuizLoungePage';
import CommentsLoungePage from './pages/CommentsLoungePage';
import ErrorBoundaryPage from './components/ErrorPage/ErrorBoundaryPage';
import NotFoundPage from './components/ErrorPage/NotFoundPage';
import ProtectedRoute from '@/components/common/ProtectedRoute/ProtectedRoute';
import ShareHandler from './pages/ShareHandler';
import WinngResultPage from './pages/WinngResultPage';

export const router = createBrowserRouter([
  {
    element: <App />,
    path: ROUTER_PATH.MAIN,
    errorElement: <ErrorBoundaryPage />,
    children: [
      {
        element: <MainPage />,
        index: true, //기본 경로
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <LotteryLoungePage />,
            path: ROUTER_PATH.LOTTERY_LOUNGE,
          },
          {
            element: <QuizLoungePage />,
            path: ROUTER_PATH.QUIZ_LOUNGE,
          },
          {
            element: <WinngResultPage />,
            path: ROUTER_PATH.WINNIG_RESULT,
          },
        ],
      },
      {
        element: <CommentsLoungePage />,
        path: ROUTER_PATH.COMMENTS_LOUNGE,
      },
      {
        element: <ShareHandler />,
        path: ROUTER_PATH.SHARE,
      },
      {
        element: <NotFoundPage />,
        path: '*',
      },
    ],
  },
]);
