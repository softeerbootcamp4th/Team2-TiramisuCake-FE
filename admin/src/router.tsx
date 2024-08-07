import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/LoginPage";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <LoginPage />,
        index: true,
      }
    ]
  },
]);
