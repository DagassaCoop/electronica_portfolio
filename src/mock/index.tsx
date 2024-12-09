// Entities
import { INavLink } from "@/entities/NavLink";
import { ISliderItem } from "@/entities/SliderItem";

// Icons
import {
  House,
  HandWaving,
  FilmReel,
  Suitcase,
  PaperPlaneTilt,
  MagicWand,
  Clock,
  Flask,
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

export const sliderItems: ISliderItem[] = [
  {
    id: "1",
    title: "Magical, fairy-tale results.",
    description:
      "Unbelievable track record that breaks records on the regular.",
    icon: (
      <MagicWand
        weight="fill"
        width={48}
        height={48}
        className="text-color-violet"
      />
    ),
    iconPosition: "left",
    bgImage: "",
  },
  {
    id: "2",
    title: "On time service.",
    description:
      "I deliver fast. Often times design is slower than it needs to be. I deliver in 1-2 days.",
    icon: (
      <Clock
        weight="fill"
        width={48}
        height={48}
        className="text-color-violet"
      />
    ),
    iconPosition: "center",
    bgImage: "",
  },
  {
    id: "3",
    title: "Researched and tested.",
    description:
      "Unbelievable track record that breaks records on the regular.",
    icon: (
      <Flask
        weight="fill"
        width={48}
        height={48}
        className="text-color-violet"
      />
    ),
    iconPosition: "right",
    bgImage: "",
  },
];

export const contactInfo = {
  email: "sashababich6@gmail.com",
  instagram: "https://www.instagram.com/curly_dreamer/",
  linkedIn: "https://www.linkedin.com/in/oleksandra-babich/",
};

export const services: string[] = [
  "Video production",
  "Video editing",
  "Content creation",
  "Graphic design",
];
