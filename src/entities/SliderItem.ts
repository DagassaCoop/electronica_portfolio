import { ReactNode } from "react";

export interface ISliderItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  iconPosition: "left" | "center" | "right";
  bgImage: string;
}
