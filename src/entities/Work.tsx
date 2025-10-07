export const WORK_GROUPS = [
  "long video",
  "short video",
  "photos & graphic design",
] as const;

export type TWorkGroup = (typeof WORK_GROUPS)[number];

export type TProjectTypes = "Product" | "Social media" | "Corporate" | "Event";

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

export type IPhoto = IWorkBase;

export interface IWorkPreview {
  id: string;
  title: string;
  img: string;
}
