import { RouteObject } from "react-router-dom";

// Components
import App from "../App";
import Home from "@/components/pages/Home/Home";
import About from "@/components/pages/About/About";
import Works from "@/components/pages/Works/Works";
import Services from "@/components/pages/Services/Services";
import Contact from "@/components/pages/Contact/Contact";

const routes: RouteObject[] = [
  {
    path: "",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/works",
        element: <Works />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
];

export default routes;
