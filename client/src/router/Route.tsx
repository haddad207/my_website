import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../app/account/Login";
import Signup from "../app/account/Signup";
import Resume from "../app/components/Resume";
import NotFound from "../app/errors/NotFound";
import ServerError from "../app/errors/ServerError";
import HomePage from "../app/components/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "resume", element: <Resume /> },
      { path: "not-found", element: <NotFound /> },
      { path: "server-error", element: <ServerError /> },
    ],
  },
]);
