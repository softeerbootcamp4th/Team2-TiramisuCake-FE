import { createBrowserRouter } from "react-router-dom";
import { ROUTER_PATH } from "./constants/lib/constants";
import App from "./App";
import MainPage from "./pages/MainPage";
import CommentsLoungePage from "./pages/CommentsLoungePage";
import LotteryLoungePage from "./pages/LotteryLoungePage";
import QuizLoungePage from "./pages/QuizLoungePage";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTER_PATH.MAIN,
        element: <MainPage />,
      },
      {
        path: ROUTER_PATH.COMMENTS_LOUNGE,
        element: <CommentsLoungePage />,
      },
      {
        path: ROUTER_PATH.LOTTERY_LOUNGE,
        element: <LotteryLoungePage />,
      },
      {
        path: ROUTER_PATH.QUIZ_LOUNGE,
        element: <QuizLoungePage />,
      },
    ],
  },
]);
