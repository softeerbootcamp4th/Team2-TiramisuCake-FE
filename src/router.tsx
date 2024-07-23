import { createBrowserRouter } from "react-router-dom";
import { ROUTER_PATH } from "./lib/constants";
import Main from "./pages/Main";
import CommentsLounge from "./pages/CommentsLounge";
import LotteryLounge from "./pages/LotteryLounge";
import QuizLounge from "./pages/QuizLounge";

export const router = createBrowserRouter([
  {
    path: ROUTER_PATH.MAIN,
    element: <Main />,
  },
  {
    path: ROUTER_PATH.COMMENTS_LOUNGE,
    element: <CommentsLounge />,
  },
  {
    path: ROUTER_PATH.LOTTERY_LOUNGE,
    element: <LotteryLounge />,
  },
  {
    path: ROUTER_PATH.QUIZ_LOUNGE,
    element: <QuizLounge />,
  },
]);
