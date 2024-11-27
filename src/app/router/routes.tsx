import { RouteObject } from "react-router-dom";

// Components
import App from "../App";
import Home from "@/components/pages/Home.page";
import About from "@/components/pages/About.page";
import Works from "@/components/pages/Works.page";
import Services from "@/components/pages/Services.page";
import Contact from "@/components/pages/Contact.page";

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
