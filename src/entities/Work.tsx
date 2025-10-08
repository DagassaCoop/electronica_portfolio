export const WORK_GROUPS = [
  "long video",
  "short video",
  "photos & graphic design",
] as const;

export type TWorkGroup = (typeof WORK_GROUPS)[number];

export type TProjectTypes =
  | "Product"
  | "Social media"
  | "Corporate"
  | "Event"
  | "Graphic Design"
  | "Photography & Design"
  | "Photography";

interface IWorkBase {
  id: string;
  title: string;
  source: string;
}

export interface IWorkProject {
  id: string;
  title: string;
  description?: string;
  cover: string;
  group: TWorkGroup;
  type: TProjectTypes;
  work: IVideo[] | IPhoto[];
}

export interface IVideo extends IWorkBase {
  cover: string;
  type: "mp4" | "mov";
}

export interface IPhoto extends IWorkBase {
  blurhash?: string;
}

export interface IWorkPreview {
  id: string;
  title: string;
  img: string;
}
