import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../app/account/Login";
import Signup from "../app/account/Signup";
import Resume from "../app/components/Resume";
import NotFound from "../app/errors/NotFound";
import ServerError from "../app/errors/ServerError";
import HomePage from "../app/components/HomePage";
import ReactInfo from "../app/components/skills/React/ReactInfo";
import Node from "../app/components/skills/Node/Node";
import Csharp from "../app/components/skills/Csharp/Csharp";
import UnrealEngine from "../app/components/skills/UnrealEngine/UnrealEngine";
import Python from "../app/components/skills/Python/Python";
import Java from "../app/components/skills/Java/Java";
import Cicd from "../app/components/skills/CICD/Cicd";
import LinuxAnsible from "../app/components/skills/cmd/LinuxAnsible";
import Databases from "../app/components/skills/Databases/Databases";

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
      { path: "react", element: <ReactInfo /> },
      { path: "node", element: <Node /> },
      { path: "csharp", element: <Csharp /> },
      { path: "ue5", element: <UnrealEngine /> },
      { path: "python", element: <Python /> },
      { path: "django", element: <Python /> },
      { path: "cicd", element: <Cicd /> },
      { path: "linux-ansible", element: <LinuxAnsible /> },
      { path: "java", element: <Java /> },
      { path: "databases", element: <Databases /> },
    ],
  },
]);
