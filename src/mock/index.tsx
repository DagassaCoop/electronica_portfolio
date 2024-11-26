// Entities
import { INavLink } from "@/entities/NavLink";
import { IWork } from "@/entities/Work";

// Icons
import {
  House,
  HandWaving,
  FilmReel,
  Suitcase,
  PaperPlaneTilt,
} from "@phosphor-icons/react";

// Assets
import work1 from "@/assets/video_creation_thumbnail_1.png";
import work2 from "@/assets/video_creation_thumbnail_2.png";
import work3 from "@/assets/video_creation_thumbnail_3.png";
import work4 from "@/assets/video_creation_thumbnail_4.png";

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

export const Works: IWork[] = [
  {
    id: "1",
    title: "Title 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident laboriosam a quos repudiandae voluptatum, maxime impedit sit mollitia necessitatibus corrupti enim quas! Suscipit facere ad quod tempore labore ab sit.",
    img: work1,
    date: new Date(),
    link: "",
  },
  {
    id: "2",
    title: "Title 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident laboriosam a quos repudiandae voluptatum, maxime impedit sit mollitia necessitatibus corrupti enim quas! Suscipit facere ad quod tempore labore ab sit.",
    img: work2,
    date: new Date(),
    link: "",
  },
  {
    id: "3",
    title: "Title 3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident laboriosam a quos repudiandae voluptatum, maxime impedit sit mollitia necessitatibus corrupti enim quas! Suscipit facere ad quod tempore labore ab sit.",
    img: work3,
    date: new Date(),
    link: "",
  },
  {
    id: "4",
    title: "Title 4",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident laboriosam a quos repudiandae voluptatum, maxime impedit sit mollitia necessitatibus corrupti enim quas! Suscipit facere ad quod tempore labore ab sit.",
    img: work4,
    date: new Date(),
    link: "",
  },
];
