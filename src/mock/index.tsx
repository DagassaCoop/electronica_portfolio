// Entities
import { INavLink } from "@/entities/NavLink";

// Icons
import {
  House,
  HandWaving,
  FilmReel,
  Suitcase,
  PaperPlaneTilt,
} from "@phosphor-icons/react";

export const navLinks: INavLink[] = [
  {
    title: "home",
    path: "/",
    icon: <House className="nav-link" />,
  },
  {
    title: "about",
    path: "/about",
    icon: <HandWaving className="nav-link" />,
  },
  {
    title: "works",
    path: "/works",
    icon: <FilmReel className="nav-link" />,
  },
  {
    title: "services",
    path: "/services",
    icon: <Suitcase className="nav-link" />,
  },
  {
    title: "contact",
    path: "/contact",
    icon: <PaperPlaneTilt className="nav-link text-white" />,
  },
];
