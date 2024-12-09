interface IWorkBase {
  id: string;
  title: string;
  source: string;
}

export interface IWorkWrapper {
  id: string;
  title: string;
  description?: string;
  cover: string;
  type: "long video" | "short video" | "photo" | "graphic design";
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
