import { RouteObject } from "react-router-dom";

// Components
import App from "../App";
import Home from "@/ui/pages/Home/Home.page";
import About from "@/ui/pages/About.page";
import Works from "@/ui/pages/Works/Works.page";
import Services from "@/ui/pages/Services.page";
import Contact from "@/ui/pages/Contact.page";

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
