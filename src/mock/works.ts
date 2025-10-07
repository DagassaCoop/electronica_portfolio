// Entities
import { IPhoto, IVideo, IWorkProject } from "../entities/Work";

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
import mindfulEatingCover from "../assets/portfolio/covers/Mindful eating.png";
import lkCover from "../assets/portfolio/covers/Software launch.png";
import canvasEventCover from "../assets/portfolio/covers/Canvas painting.png";
import eeVideoCover from "../assets/portfolio/covers/ee video.png";
import companyOverviewCover from "../assets/portfolio/covers/company overview.png";
import manufacturingWalkThroughCover from "../assets/portfolio/covers/manufacturing walk through.png";
import quichInsightsCover from "../assets/portfolio/covers/quich insights.png";

// Photo covers
import holidayChocCover from "../assets/portfolio/photo/holiday_choc/cover.png";
import onSitePicturesCover from "../assets/portfolio/photo/on_site_pictures/cover.png";

// Graphic covers
import dentalSocialMediaCover from "../assets/portfolio/graphic/dental/cover.png";
import edgecomSocialMediaCover from "../assets/portfolio/graphic/edgecom_social_media/cover.png";
import lovoChocolateCover from "../assets/portfolio/graphic/lovo_chocolate/cover.png";

// Photo assets - Holiday Chocolate
const holidayChoc1 = new URL(
  "../assets/portfolio/photo/holiday_choc/IMG_3867 2.JPG",
  import.meta.url
).href;
const holidayChoc2 = new URL(
  "../assets/portfolio/photo/holiday_choc/IMG_3886 2.JPG",
  import.meta.url
).href;
const holidayChoc3 = new URL(
  "../assets/portfolio/photo/holiday_choc/IMG_3894 2.JPG",
  import.meta.url
).href;
const holidayChoc4 = new URL(
  "../assets/portfolio/photo/holiday_choc/IMG_3924 3.JPG",
  import.meta.url
).href;
const holidayChoc5 = new URL(
  "../assets/portfolio/photo/holiday_choc/IMG_3941 2.JPG",
  import.meta.url
).href;

// Photo assets - On-Site Pictures
import onSite1 from "../assets/portfolio/photo/on_site_pictures/1.png";
import onSite2 from "../assets/portfolio/photo/on_site_pictures/2.png";
import onSite3 from "../assets/portfolio/photo/on_site_pictures/3.png";
import onSite4 from "../assets/portfolio/photo/on_site_pictures/4.png";
import onSite5 from "../assets/portfolio/photo/on_site_pictures/5.png";
import onSite6 from "../assets/portfolio/photo/on_site_pictures/6.png";
import onSite7 from "../assets/portfolio/photo/on_site_pictures/7.png";

// Graphic assets - Dental Social Media
import dental1 from "../assets/portfolio/graphic/dental/1.png";
import dental2 from "../assets/portfolio/graphic/dental/2.png";
import dental3 from "../assets/portfolio/graphic/dental/3.png";
import dental4 from "../assets/portfolio/graphic/dental/4.png";
import dental5 from "../assets/portfolio/graphic/dental/5.png";
import dental6 from "../assets/portfolio/graphic/dental/6.png";
import dental7 from "../assets/portfolio/graphic/dental/7.png";

// Graphic assets - Edgecom Social Media
import edgecomSocial1 from "../assets/portfolio/graphic/edgecom_social_media/1.jpeg";
import edgecomSocial2 from "../assets/portfolio/graphic/edgecom_social_media/2.jpeg";
import edgecomSocial3 from "../assets/portfolio/graphic/edgecom_social_media/3.jpeg";
import edgecomSocial4 from "../assets/portfolio/graphic/edgecom_social_media/4.jpeg";
import edgecomSocial5 from "../assets/portfolio/graphic/edgecom_social_media/5.jpeg";
import edgecomSocial6 from "../assets/portfolio/graphic/edgecom_social_media/1737640803459.jpeg";
import edgecomSocial7 from "../assets/portfolio/graphic/edgecom_social_media/1738936830708.jpeg";
import edgecomSocial8 from "../assets/portfolio/graphic/edgecom_social_media/1742327319492.jpeg";
import edgecomSocial9 from "../assets/portfolio/graphic/edgecom_social_media/1746712747867.jpeg";
import edgecomSocial10 from "../assets/portfolio/graphic/edgecom_social_media/1747228123618.jpeg";
import edgecomSocial11 from "../assets/portfolio/graphic/edgecom_social_media/1747923399794.jpeg";
import edgecomSocial12 from "../assets/portfolio/graphic/edgecom_social_media/1748015941577.jpeg";
import edgecomSocial13 from "../assets/portfolio/graphic/edgecom_social_media/1748544562142.jpeg";
import edgecomSocial14 from "../assets/portfolio/graphic/edgecom_social_media/1750251720529.jpeg";
import edgecomSocial15 from "../assets/portfolio/graphic/edgecom_social_media/1750873043700.jpeg";
import edgecomSocial16 from "../assets/portfolio/graphic/edgecom_social_media/1752170715876.jpeg";

// Graphic assets - Lovo Chocolate Billboards
import lovoBillboard1 from "../assets/portfolio/graphic/lovo_chocolate/billboard 1.png";
import lovoBillboard2 from "../assets/portfolio/graphic/lovo_chocolate/billboard 2.png";
import lovoBillboard3 from "../assets/portfolio/graphic/lovo_chocolate/billboard 3.png";

export const shortVideos: IWorkProject[] = [
  {
    id: "d10c3656-4a12-4697-b009-60a0fe87c36e",
    title: "Quick CEO Insights",
    description:
      "Description: A short educational reel featuring the CEO of Edgecom Energy, filmed and edited to share clear, insightful commentary in a concise, engaging format.",
    cover: quichInsightsCover,
    group: "short video",
    type: "Corporate",
    work: [
      {
        id: "486751b0-b6e9-4286-b47b-b0ca950ede6b",
        title: "Quick CEO Insights",
        cover: quichInsightsCover,
        source: "Q1 (Jan-Feb) new intro.mov",
        type: "mov",
      },
    ],
  },
  {
    id: "ab2b9ed0-9c23-4783-bd0f-9f6abfe3ce70",
    title: "Behind the Scenes: Site Visit with Edgecom Energy",
    description:
      "Description: A dynamic and professional reel capturing a site visit conducted by Edgecom Energy at a manufacturing facility.",
    cover: manufacturingWalkThroughCover,
    group: "short video",
    type: "Corporate",
    work: [
      {
        id: "bae64978-8282-4e83-b5e8-1a4cb1a774bc",
        title: "Behind the Scenes: Site Visit with Edgecom Energy",
        cover: manufacturingWalkThroughCover,
        source: "Site visit short video.mov",
        type: "mov",
      },
    ],
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
];

export const longVideos: IWorkProject[] = [
  {
    id: "1aaaa29a-31eb-4d9b-9e04-4f9905cff68c",
    title: "Leading with Purpose",
    description:
      "A clean and professional corporate video created for Edgecom Energy, featuring their CEO as he shares the company’s mission and the importance of their work.",
    cover: eeVideoCover,
    group: "long video",
    type: "Corporate",
    work: [
      {
        id: "f6cdbc94-2383-4e7a-93ec-ced84c7ae49a",
        title: "Leading with Purpose",
        cover: eeVideoCover,
        source: "Video_Card_mp4_20250311_Final.mov",
        type: "mov",
      },
    ] as IVideo[],
  },
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
    id: "9effef0d-3728-4995-b1ee-11ae9e25aef2",
    title: "Who We Are: Company Overview",
    description:
      "A clean and professional video introducing the company, its mission, and services. All b-roll footage was filmed with real team members and authentic moments from their day-to-day process, creating an honest and engaging snapshot of the company’s work and culture.",
    cover: companyOverviewCover,
    group: "long video",
    type: "Corporate",
    work: [
      {
        id: "ad3e1954-a89f-4ac9-8e53-8ca6809cef8f",
        title: "Who We Are: Company Overview",
        cover: salesTrainingCover,
        source: "Video_Brand Awareness _mov_20250312_Final upd quality.mp4",
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

export const photosAndGraphic: IWorkProject[] = [
  {
    id: "a1b2c3d4-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    title: "Holiday Chocolate Photography",
    description:
      "A cozy product photography series for a chocolate brand's holiday campaign, capturing the warmth and sweetness of the season.",
    cover: holidayChocCover,
    group: "photos & graphic design",
    type: "Product",
    work: [
      {
        id: "h1c1-0001-0001-0001-000000000001",
        title: "Holiday Chocolate 1",
        source: holidayChoc1,
      },
      {
        id: "h1c1-0001-0001-0001-000000000002",
        title: "Holiday Chocolate 2",
        source: holidayChoc2,
      },
      {
        id: "h1c1-0001-0001-0001-000000000003",
        title: "Holiday Chocolate 3",
        source: holidayChoc3,
      },
      {
        id: "h1c1-0001-0001-0001-000000000004",
        title: "Holiday Chocolate 4",
        source: holidayChoc4,
      },
      {
        id: "h1c1-0001-0001-0001-000000000005",
        title: "Holiday Chocolate 5",
        source: holidayChoc5,
      },
    ] as IPhoto[],
  },
  {
    id: "b2c3d4e5-6f7g-8h9i-0j1k-2l3m4n5o6p7q",
    title: "Behind the Scenes: Manufacturing Site Photography",
    description:
      "Professional on-site photography documenting Edgecom Energy's visit to a manufacturing facility, capturing the technical process and team collaboration.",
    cover: onSitePicturesCover,
    group: "photos & graphic design",
    type: "Corporate",
    work: [
      {
        id: "os01-0001-0001-0001-000000000001",
        title: "On-Site Photo 1",
        source: onSite1,
      },
      {
        id: "os01-0001-0001-0001-000000000002",
        title: "On-Site Photo 2",
        source: onSite2,
      },
      {
        id: "os01-0001-0001-0001-000000000003",
        title: "On-Site Photo 3",
        source: onSite3,
      },
      {
        id: "os01-0001-0001-0001-000000000004",
        title: "On-Site Photo 4",
        source: onSite4,
      },
      {
        id: "os01-0001-0001-0001-000000000005",
        title: "On-Site Photo 5",
        source: onSite5,
      },
      {
        id: "os01-0001-0001-0001-000000000006",
        title: "On-Site Photo 6",
        source: onSite6,
      },
      {
        id: "os01-0001-0001-0001-000000000007",
        title: "On-Site Photo 7",
        source: onSite7,
      },
    ] as IPhoto[],
  },
  {
    id: "c3d4e5f6-7g8h-9i0j-1k2l-3m4n5o6p7q8r",
    title: "River Street Endodontics Social Media Graphics",
    description:
      "A series of clean and engaging social media graphics designed for River Street Endodontics, combining educational content with modern aesthetics.",
    cover: dentalSocialMediaCover,
    group: "photos & graphic design",
    type: "Social media",
    work: [
      {
        id: "dn01-0001-0001-0001-000000000001",
        title: "Dental Social Media Post 1",
        source: dental1,
      },
      {
        id: "dn01-0001-0001-0001-000000000002",
        title: "Dental Social Media Post 2",
        source: dental2,
      },
      {
        id: "dn01-0001-0001-0001-000000000003",
        title: "Dental Social Media Post 3",
        source: dental3,
      },
      {
        id: "dn01-0001-0001-0001-000000000004",
        title: "Dental Social Media Post 4",
        source: dental4,
      },
      {
        id: "dn01-0001-0001-0001-000000000005",
        title: "Dental Social Media Post 5",
        source: dental5,
      },
      {
        id: "dn01-0001-0001-0001-000000000006",
        title: "Dental Social Media Post 6",
        source: dental6,
      },
      {
        id: "dn01-0001-0001-0001-000000000007",
        title: "Dental Social Media Post 7",
        source: dental7,
      },
    ] as IPhoto[],
  },
  {
    id: "d4e5f6g7-8h9i-0j1k-2l3m-4n5o6p7q8r9s",
    title: "Edgecom Energy Social Media Graphics",
    description:
      "A comprehensive collection of professional social media graphics created for Edgecom Energy, featuring corporate branding, educational content, and promotional materials.",
    cover: edgecomSocialMediaCover,
    group: "photos & graphic design",
    type: "Social media",
    work: [
      {
        id: "ee01-0001-0001-0001-000000000001",
        title: "Edgecom Social Media Post 1",
        source: edgecomSocial1,
      },
      {
        id: "ee01-0001-0001-0001-000000000002",
        title: "Edgecom Social Media Post 2",
        source: edgecomSocial2,
      },
      {
        id: "ee01-0001-0001-0001-000000000003",
        title: "Edgecom Social Media Post 3",
        source: edgecomSocial3,
      },
      {
        id: "ee01-0001-0001-0001-000000000004",
        title: "Edgecom Social Media Post 4",
        source: edgecomSocial4,
      },
      {
        id: "ee01-0001-0001-0001-000000000005",
        title: "Edgecom Social Media Post 5",
        source: edgecomSocial5,
      },
      {
        id: "ee01-0001-0001-0001-000000000006",
        title: "Edgecom Social Media Post 6",
        source: edgecomSocial6,
      },
      {
        id: "ee01-0001-0001-0001-000000000007",
        title: "Edgecom Social Media Post 7",
        source: edgecomSocial7,
      },
      {
        id: "ee01-0001-0001-0001-000000000008",
        title: "Edgecom Social Media Post 8",
        source: edgecomSocial8,
      },
      {
        id: "ee01-0001-0001-0001-000000000009",
        title: "Edgecom Social Media Post 9",
        source: edgecomSocial9,
      },
      {
        id: "ee01-0001-0001-0001-000000000010",
        title: "Edgecom Social Media Post 10",
        source: edgecomSocial10,
      },
      {
        id: "ee01-0001-0001-0001-000000000011",
        title: "Edgecom Social Media Post 11",
        source: edgecomSocial11,
      },
      {
        id: "ee01-0001-0001-0001-000000000012",
        title: "Edgecom Social Media Post 12",
        source: edgecomSocial12,
      },
      {
        id: "ee01-0001-0001-0001-000000000013",
        title: "Edgecom Social Media Post 13",
        source: edgecomSocial13,
      },
      {
        id: "ee01-0001-0001-0001-000000000014",
        title: "Edgecom Social Media Post 14",
        source: edgecomSocial14,
      },
      {
        id: "ee01-0001-0001-0001-000000000015",
        title: "Edgecom Social Media Post 15",
        source: edgecomSocial15,
      },
      {
        id: "ee01-0001-0001-0001-000000000016",
        title: "Edgecom Social Media Post 16",
        source: edgecomSocial16,
      },
    ] as IPhoto[],
  },
  {
    id: "e5f6g7h8-9i0j-1k2l-3m4n-5o6p7q8r9s0t",
    title: "Lovo Chocolate Billboard Campaign",
    description:
      "A striking billboard campaign for Lovo Chocolate, designed to capture attention and showcase the brand's premium quality in large-format outdoor advertising.",
    cover: lovoChocolateCover,
    group: "photos & graphic design",
    type: "Product",
    work: [
      {
        id: "lv01-0001-0001-0001-000000000001",
        title: "Lovo Chocolate Billboard 1",
        source: lovoBillboard1,
      },
      {
        id: "lv01-0001-0001-0001-000000000002",
        title: "Lovo Chocolate Billboard 2",
        source: lovoBillboard2,
      },
      {
        id: "lv01-0001-0001-0001-000000000003",
        title: "Lovo Chocolate Billboard 3",
        source: lovoBillboard3,
      },
    ] as IPhoto[],
  },
];
