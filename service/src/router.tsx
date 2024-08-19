import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainPage from './pages/MainPage';
import LotteryLoungePage from './pages/LotteryLounge';
import { ROUTER_PATH } from './constants/lib/constants';
import QuizLoungePage from './pages/QuizLoungePage';
import CommentsLoungePage from './pages/CommentsLoungePage';
import ErrorBoundaryPage from './components/ErrorPage/ErrorBoundaryPage';
import NotFoundPage from './components/ErrorPage/NotFoundPage';
import LoadingPage from './components/LoadingPage/LoadingPage';

export const router = createBrowserRouter([
  {
    element: <App />,
    path: ROUTER_PATH.MAIN,
    children: [
      {
        element: <MainPage />,
        index: true, //기본 경로
        errorElement: <ErrorBoundaryPage />,
      },
      {
        element: <LotteryLoungePage />,
        path: ROUTER_PATH.LOTTERY_LOUNGE,
        errorElement: <ErrorBoundaryPage />,
      },
      {
        element: <QuizLoungePage />,
        path: ROUTER_PATH.QUIZ_LOUNGE,
        errorElement: <ErrorBoundaryPage />,
      },
      {
        element: <CommentsLoungePage />,
        path: ROUTER_PATH.COMMENTS_LOUNGE,
        errorElement: <ErrorBoundaryPage />,
      },
      {
        element: <LoadingPage />,
        path: 'huh',
        errorElement: <ErrorBoundaryPage />,
      },
      {
        element: <NotFoundPage />,
        path: '*',
      },
    ],
  },
]);
