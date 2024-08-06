import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import App from "./App";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      }
    ],
  },
]);
