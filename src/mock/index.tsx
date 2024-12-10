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
  LightbulbFilament,
  FilmSlate,
  PencilSimpleLine,
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
    title: "Idea development.",
    description:
      "Transforming visions into clear plans with creative ideas and strategies that bring stories to life.",
    icon: (
      <LightbulbFilament
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
    title: "Filming.",
    description:
      "Capturing moments with care and attention to detail to bring ideas to life on camera.",
    icon: (
      <FilmSlate
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
    title: "Editing.",
    description:
      "Turning raw footage into polished, engaging videos that tell stories beautifully..",
    icon: (
      <PencilSimpleLine
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
