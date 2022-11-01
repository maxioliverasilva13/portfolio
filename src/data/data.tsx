import Image from "../assets/social.jpg";
import {
  ImageType,
  MenuProps,
  ProjectCardProps,
  SkillsProps,
  TimelineProps,
} from "../types/types";
export const URL = "https://awesome-portfolio.piyushmehta.com";
export const NAME = "Maximiliano Olivera";

export const SECTIONS = ["Home", "Experience", "Projects", "Skills"];
export const HERO_IMAGE = "https://picsum.photos/id/1005/1600/1400";
export const CTA_TEXT = "Know More";
export const MENU: MenuProps[] = [
  { key: 1, route: "home", name: SECTIONS[0] },
  { key: 2, route: "experience", name: SECTIONS[1] },
  { key: 3, route: "projects", name: SECTIONS[2] },
  { key: 4, route: "skills", name: SECTIONS[3] },
];

export const GREETING_TEXT = "Hello, Welcome to my site";
export const GREETING_DESCRIPTION =
  "Maximiliano Olivera Silva - Uruguay";

export const EXPERIENCE: TimelineProps[] = [
  {
    key: 1,
    company: "DualBootPartners",
    position: "FullStack Developer",
    logo: "https://dualbootpartners.com/wp-content/uploads/2022/02/DPB_LOGO_HORIZONTAL.svg",
    start: "2021-03-23",
    end: "Now",
    description:
      "I working on the full stack developer of Dualboot Partner's team.",
  },
];
export const KEYWORDS = [
  "Developer",
  "front end developer based in India",
  "piyush mehta",
  "Awesome Portfolio",
];
export const IMAGE: ImageType = {
  src: Image,
  height: "600",
  width: "314",
};

export const projects: ProjectCardProps[] = [
  {
    id: 1,
    projectName: "Infill",
    projectDescription: "Product based in a maptables ",
    projectImageLogo: `https://res.cloudinary.com/dkjujr3gj/image/upload/v1667274116/thrlj3lisicz0utrpsex.png`,
    link: "https://www.getinfill.com/",
    buttonText: "View Project",
    tech: [
      "React",
      "TailwindCSS",
      "CSS",
      "Javascript",
      "Rescript",
      "Firebase",
      "NodeJs",
      "NextJs",
      "Google Map",
      "Google Cloud Functions",
    ],
  },
  {
    id: 2,
    projectName: "Jib Jab",
    projectDescription:
      "JibJab offers a free account or a paid Premium Membership. Our free members have limited access to create, view and share a handful of Starring You videos and photos. You can find these cards by searching Free on jibjab.com. They can also create and share free GIFs in the JibJab mobile app.",
    projectImageLogo: `https://play-lh.googleusercontent.com/erZ8VTfVmvHcm55xG9t0_DZt_bKxOJZqkIo-gQ_yCn2JfXUTw34CqfG6Digkw9SKaHM`,
    link: "https://www.jibjab.com/",
    buttonText: "View Project",
    tech: [
      "React",
      "TailwindCSS",
      "Docker",
      "NodeJS",
      "MaterialUI",
      "SASS",
      "HTML",
      "CSS",
      "Redux",
    ],
  },
  {
    id: 3,
    projectName: "LiftOneNow",
    projectDescription:
      "Conveniently request service or equipment, rental and parts quotes. Simple, easy and on your schedule, Real-Time Updates on Repairs and view manage fleet asset details app",
    projectImageLogo: `https://res.cloudinary.com/dkjujr3gj/image/upload/v1667272691/jlumqdzmudqkvwgk5t2c.png`,
    link: "https://www.liftone.net/liftone-now/",
    buttonText: "View Project",
    tech: [
      "React",
      "Redux",
      "SCSS",
      "Javascript",
      "TailwindCSS",
      "NodeJs",
      "Php",
    ],
  },
  {
    id: 3,
    projectName: "FiddoTabbyPassport",
    projectDescription:
      "FidoAlert is a FREE nationwide pet alert network that connects you to thousands of local Pet Finders in your area to bring your lost dog home safe and sound.",
    projectImageLogo: `https://res.cloudinary.com/dkjujr3gj/image/upload/v1667272840/nrcycsyce0njpwlaxnnn.png`,
    link: "https://www.fidoalert.com/tabby",
    buttonText: "View Project",
    tech: [
      "React",
      "Redux",
      "SCSS",
      "Javascript",
      "TailwindCSS",
      "NodeJs",
      "Php",
    ],
  },
];
/**
 *  @type {SkillsProps}
 * skills
 * Kept level as random but you can hard code it if you want
 */
export const skills: SkillsProps[] = [
  {
    id: 1,
    skill: "Javascript",
    level: 90,
  },
  {
    id: 2,
    skill: "React",
    level: 80,
  },
  {
    id: 3,
    skill: "CSS",
    level: 90,
  },
  {
    id: 4,
    skill: "HTML",
    level: 95,
  },
  {
    id: 5,
    skill: "Java",
    level: 60,
  },
  {
    id: 6,
    skill: "C++",
    level: 55,
  },
  {
    id: 7,
    skill: "Dart",
    level: 70,
  },
  {
    id: 8,
    skill: "Flutter",
    level: 65,
  },
  {
    id: 9,
    skill: "R",
    level: 20,
  },
  {
    id: 10,
    skill: "Rescript",
    level: 66,
  },
  {
    id: 11,
    skill: "Python",
    level: 20,
  },
  {
    id: 12,
    skill: "NextJS",
    level: 60,
  },
  {
    id: 13,
    skill: "NodeJS",
    level: 75,
  },
  {
    id: 14,
    skill: "Firebase",
    level: 75,
  },
];
