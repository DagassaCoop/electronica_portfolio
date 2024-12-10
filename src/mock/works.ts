// Entities
import { IPhoto, IVideo, IWorkProject } from "../entities/Work";

// Assets
//  Covers
import olaplexCover from "../assets/portfolio/covers/OLAPLEX COVER.png";
import ordinaryCover from "../assets/portfolio/covers/Ordinary cover.png";
import whyDoILiftCover from "../assets/portfolio/covers/WHY DO I LIFT.png";
import fancyDrinkCover from "../assets/portfolio/covers/REFRESHING DRINK.png";
import rootCanalCover from "../assets/portfolio/covers/ROOT CANAL.png";
import winterDrinkCover from "../assets/portfolio/covers/WINTER DRINK.png";
import wrapItUpCover from "../assets/portfolio/covers/WRAP IT UP.png";
import riverClinicCover from "../assets/portfolio/covers/WELCOME TO THE CLINIC.png";
import salesTrainingCover from "../assets/portfolio/covers/Staying Relevant in Sales.png";
import salesPerspectiveCover from "../assets/portfolio/covers/Sales perspective.png";
import mindfulEatingCover from "../assets/portfolio/covers/Mindful eating .png";
import lkCover from "../assets/portfolio/covers/Software launch.png";
import canvasEventCover from "../assets/portfolio/covers/Canvas painting.png";

//  Graphic Designs
import billboard_1 from "../assets/portfolio/graphic design/billboard 1.png";
import billboard_2 from "../assets/portfolio/graphic design/billboard 2.png";
import billboard_3 from "../assets/portfolio/graphic design/billboard 3.png";
import clinic_1 from "../assets/portfolio/graphic design/1.png";
import clinic_2 from "../assets/portfolio/graphic design/2.png";
import clinic_3 from "../assets/portfolio/graphic design/3.png";
import clinic_4 from "../assets/portfolio/graphic design/4.png";
import clinic_5 from "../assets/portfolio/graphic design/5.png";
import clinic_6 from "../assets/portfolio/graphic design/6.png";
import clinic_7 from "../assets/portfolio/graphic design/7.png";

//   Photos
// import christmas_1 from "../assets/portfolio/photos/IMG_3867 2.jpg";
// import christmas_2 from "../assets/portfolio/photos/IMG_3886 2.jpg";
// import christmas_3 from "../assets/portfolio/photos/IMG_3894 2.jpg";
// import christmas_4 from "../assets/portfolio/photos/IMG_3924 2.jpg";
// import christmas_5 from "../assets/portfolio/photos/IMG_3941 2.jpg";

export const shortVideos: IWorkProject[] = [
  {
    id: "e2c7554f-6805-407a-a2d7-fe858f2e19e4",
    title: "Strength in Every Rep",
    description:
      "A motivational reel capturing a weightlifter’s journey, with her own voice narrating the story.",
    cover: whyDoILiftCover,
    group: "short video",
    type: "Social media",
    work: [
      {
        id: "8b7de276-379d-4530-a6be-0faa40a34f67",
        title: "Strength in Every Rep",
        cover: whyDoILiftCover,
        source: "why-do-i-lift.mov",
        type: "mov",
      },
    ] as IVideo[],
  },
  {
    id: "4fc8b2ef-8175-42e0-93a4-8a4616329ec2",
    title: "Fresh & Refreshing: Drink in the Making",
    description:
      "A short-form reel showcasing the process of crafting a fresh drink.",
    cover: fancyDrinkCover,
    group: "short video",
    type: "Social media",
    work: [
      {
        id: "5ff98cd2-db44-4642-b112-279619f78e06",
        title: "Fancy a drink",
        cover: fancyDrinkCover,
        source: "fancy-a-drink.mp4",
        type: "mp4",
      },
    ] as IVideo[],
  },
  {
    id: "985d00c8-8bd5-4acf-9918-5931daccf539",
    title: "Understanding Root Canals: Simplified",
    description:
      "An engaging animated reel explaining a dental procedure, created for River Street Endodontics.",
    cover: rootCanalCover,
    group: "short video",
    type: "Social media",
    work: [
      {
        id: "ab7d7f70-11c0-4282-a837-663095b4b2e9",
        title: "Root Canal",
        cover: rootCanalCover,
        source: "root-canal-dental-clinic.mov",
        type: "mov",
      },
    ] as IVideo[],
  },
  {
    id: "510864be-fba3-48f8-923e-e41a08055548",
    title: "Sweet Holidays Ahead",
    description:
      "A series of festive reels created for a chocolate brand’s Christmas campaign.",
    cover: winterDrinkCover,
    group: "short video",
    type: "Social media",
    work: [
      {
        id: "cd973a88-42a0-481e-92b7-bff2be9ff5d6",
        title: "Perfect Winter Drink",
        cover: winterDrinkCover,
        source: "perfect-winter-drink.mp4",
        type: "mp4",
      },
      {
        id: "a3758a80-224c-48dd-913c-b2b469ed4bf0",
        title: "Wrap it up",
        cover: wrapItUpCover,
        source: "wrap-it-up.mov",
        type: "mov",
      },
    ] as IVideo[],
  },
  {
    id: "e42867a8-e5d5-4a21-b5c7-3a2c372eac11",
    title: "A Day in the Life: Inside an Endo Clinic",
    description:
      "A lifestyle reel capturing the daily routine of an endodontic clinic.",
    cover: riverClinicCover,
    group: "short video",
    type: "Social media",
    work: [
      {
        id: "4e1ba132-1a4e-477b-ab5a-032f3db97d58",
        title: "Welcome to River Clinic",
        cover: riverClinicCover,
        source: "welcome-to-river-st-endo.mov",
        type: "mov",
      },
    ] as IVideo[],
  },
  {
    id: "2c31860c-335b-49ac-be88-16645e0a6520",
    title: "Cosmetic brands: Simplicity in Focus",
    description:
      "Clean and simple reels I created to highlight brands’ beauty and transparency.",
    cover: ordinaryCover,
    group: "short video",
    type: "Product",
    work: [
      {
        id: "b8102e6c-663f-46db-ad19-e9caf0625d41",
        title: "Ordinary",
        cover: ordinaryCover,
        source: "ordinary.mp4",
        type: "mp4",
      },
      {
        id: "0c140f87-36e9-4c01-aee7-0cff0557666c",
        title: "Olaplex",
        cover: olaplexCover,
        source: "olaplex.mp4",
        type: "mp4",
      },
    ] as IVideo[],
  },
];

export const longVideos: IWorkProject[] = [
  {
    id: "b8d3ac8f-bcb6-4db7-b015-6ccd66597831",
    title: "Staying Relevant in Sales p.1",
    description:
      "A long-form educational videos created for the company’s training platform.",
    cover: salesTrainingCover,
    group: "long video",
    type: "Corporate",
    work: [
      {
        id: "7cfa8205-8912-473e-b001-ee9483c878e7",
        title: "Sales Training",
        cover: salesTrainingCover,
        source: "sales-training-video.mp4",
        type: "mp4",
      },
    ] as IVideo[],
  },
  {
    id: "9bed3edf-3399-4d6d-8352-2392defe524c",
    title: "Staying Relevant in Sales p.2",
    description:
      "A long-form educational videos created for the company’s training platform.",
    cover: salesPerspectiveCover,
    group: "long video",
    type: "Corporate",
    work: [
      {
        id: "02063fd9-1fe1-4fb6-a065-af91b637d2b4",
        title: "Sales Perspective",
        cover: salesPerspectiveCover,
        source: "monthly-revenue-sales-perspective.mp4",
        type: "mp4",
      },
    ] as IVideo[],
  },
  {
    id: "dbe03def-3286-4c38-9608-f59207ca8316",
    title: "Mindful Eating for a Healthier You",
    description:
      "A long-form video created for a weight loss clinic, featuring their director sharing insights on mindful eating.",
    cover: mindfulEatingCover,
    group: "long video",
    type: "Corporate",
    work: [
      {
        id: "8056a7a2-a88c-4bcd-ac08-13b2f5f42a20",
        title: "Mindful Eating",
        cover: mindfulEatingCover,
        source: "mindful-eating.mov",
        type: "mov",
      },
    ] as IVideo[],
  },
  {
    id: "51bbfa22-8c19-4a83-be06-d8adad53f582",
    title: "Revolutionizing Crowdfunding: Software Launch",
    description:
      "A long-form video showcasing the launch of a new white-label crowdfunding solution.",
    cover: lkCover,
    group: "long video",
    type: "Corporate",
    work: [
      {
        id: "9d28f949-05d6-44e4-8a54-70d68b6f9ed3",
        title: "LK Launch",
        cover: lkCover,
        source: "lk-video.mov",
        type: "mov",
      },
    ] as IVideo[],
  },
  {
    id: "7485c1c9-f083-4122-8ffe-13171ed43a0e",
    title: "Creativity Unleashed: Canvas Painting Event",
    description:
      "A long-form video capturing the energy and creativity of a canvas painting event.",
    cover: canvasEventCover,
    group: "long video",
    type: "Event",
    work: [
      {
        id: "84d80a81-697b-47ca-8ccd-2f4628bd2563",
        title: "Canvas Painting Event",
        cover: canvasEventCover,
        source: "canvas-painting.mov",
        type: "mov",
      },
    ] as IVideo[],
  },
];

export const graphicDesigns: IWorkProject[] = [
  {
    id: "1bb39310-8eee-48a0-b4a3-1c6fb164d734",
    title: "​​Billboards for Chocolate Brand",
    description: "Billboard designs created to promote a chocolate brand.",
    cover: billboard_1,
    group: "graphic design",
    type: "Product",
    work: [
      {
        id: "88d59a87-a056-487b-a7c1-dc3bf38e21ee",
        title: "Billboard 1",
        source: billboard_1,
      },
      {
        id: "333100e9-e83b-4ec8-9a77-77e00de6eaf4",
        title: "Billboard 2",
        source: billboard_2,
      },
      {
        id: "dd5e67f2-c8b7-4b28-a316-f0e8b880ebca",
        title: "Billboard 3",
        source: billboard_3,
      },
    ] as IPhoto[],
  },
  {
    id: "eb1fc655-9b4b-4c65-8d39-6e5ab789e67d",
    title: "Meet the Team' Instagram Posts for Dental Clinic",
    description:
      "A set of Instagram visuals designed for a dental clinic's 'Meet the Team' series.",
    cover: clinic_1,
    group: "graphic design",
    type: "Social media",
    work: [
      {
        id: "b08255c9-d879-4106-893a-469613e73860",
        title: "Clinic 1",
        source: clinic_1,
      },
      {
        id: "3f89e16a-d5bb-4973-894b-d4e6ff714388",
        title: "Clinic 2",
        source: clinic_2,
      },
      {
        id: "8d67bdbf-c25c-4294-a18b-039200a03115",
        title: "Clinic 3",
        source: clinic_3,
      },
      {
        id: "44c2e933-a7a3-4c65-8a98-c494a6b14854",
        title: "Clinic 4",
        source: clinic_4,
      },
      {
        id: "b23db386-f6f0-43e0-9278-c46644bfa671",
        title: "Clinic 5",
        source: clinic_5,
      },
      {
        id: "c2063c94-54f1-411d-a1e4-07a33c2e96ea",
        title: "Clinic 6",
        source: clinic_6,
      },
      {
        id: "28cf6468-e9d9-4816-a56b-17498ded028c",
        title: "Clinic 7",
        source: clinic_7,
      },
    ] as IPhoto[],
  },
];

// export const photos: IWorkProject[] = [
//   {
//     id: "d5c6b841-a164-4b89-a931-e2553ff7d5f9",
//     title: "Christmas campaign",
//     description:
//       "A festive collection of product photos created for a chocolate brand's Christmas campaign.",
//     cover: "",
//     group: "photo",
//     type: "Product",
//     work: [
//       {
//         id: "9ce0f4ff-5db6-479a-87ce-7c3a136e4d53",
//         title: "Christmas campaign 1",
//         source: christmas_1,
//       },
//       {
//         id: "e5081316-8090-4610-957d-95acc5e7a39f",
//         title: "Christmas campaign 2",
//         source: christmas_2,
//       },
//       {
//         id: "b3850862-50bc-4c86-a503-def8d346c937",
//         title: "Christmas campaign 3",
//         source: christmas_3,
//       },
//       {
//         id: "1bb69d9f-8baf-48b5-8d9b-3a00e8e77df2",
//         title: "Christmas campaign 4",
//         source: christmas_4,
//       },
//       {
//         id: "6a13a6e6-7559-40d7-a44e-a72c9a6136ef",
//         title: "Christmas campaign 5",
//         source: christmas_5,
//       },
//     ] as IPhoto[],
//   },
// ];
