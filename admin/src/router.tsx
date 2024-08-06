import { createBrowserRouter } from "react-router-dom";
import { ROUTER_PATH } from "./lib/constants";
import Main from "./pages/Main";
import App from "./App";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTER_PATH.MAIN,
        element: <Main />,
      },
    ],
  },
]);
