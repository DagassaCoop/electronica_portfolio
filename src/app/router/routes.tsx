import { RouteObject } from "react-router-dom";

// Components
import App from "../App";
import Home from "@/components/pages/Home/Home";

const routes: RouteObject[] = [
  {
    path: "",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

export default routes;
