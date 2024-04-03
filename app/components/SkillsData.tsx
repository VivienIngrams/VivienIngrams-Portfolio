import { ReactNode } from "react";
import {
    IoLogoFirebase,
    IoLogoReact,
    IoLogoJavascript,
    IoLogoWordpress,
    IoLogoGithub,
  } from "react-icons/io5";
  import {
    SiCanva,
    SiTailwindcss,
    SiTypescript,
    SiMongodb,
    SiNextdotjs,
    SiGooglemaps,
    SiProtonmail,
    SiFigma
  } from "react-icons/si";
  
export interface Skill {
  id: number;
  name: string;
  icon: ReactNode;
  link: string;
}

const SkillsData: Skill[] = [
  {
    id: 1,
    name: "JavaScript",
    icon: <IoLogoJavascript className="object-fill h-5 w-5 sm:h-8 sm:w-8 lg:h-12 lg:w-12" />,
    link: "/research-blog",
  },
  {
    id: 2,
    name: "Canva",
    icon: <SiCanva className="object-fill h-5 w-5 sm:h-8 sm:w-8 lg:h-12 lg:w-12"/>,
    link: "/cv.pdf",
  },
  {
    id: 3,
    name: "React",
    icon: <IoLogoReact className="object-fill h-5 w-5 sm:h-8 sm:w-8 lg:h-12 lg:w-12"/>,
    link: "/model-portfolio",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="object-fill h-5 w-5 sm:h-8 sm:w-8 lg:h-12 lg:w-12"/>,
    link: "/model-portfolio",
  },
  {
    id: 5,
    name: "Firebase",
    icon: <IoLogoFirebase className="object-fill h-5 w-5 sm:h-8 sm:w-8 lg:h-12 lg:w-12"/>,
    link: "/research-blog",
  },
  {
    id: 6,
    name: "Github",
    icon: <IoLogoGithub className="object-fill h-5 w-5 sm:h-8 sm:w-8 lg:h-12 lg:w-12"/>,
    link: "https://github.com/VivienIngrams",
  },
  {
    id: 7,
    name: "NextJS",
    icon: <SiNextdotjs className="object-fill h-5 w-5 sm:h-8 sm:w-8 lg:h-12 lg:w-12"/>,
    link: "/model-portfolio",
  },
  {
    id: 8,
    name: "Typescript",
    icon: <SiTypescript className="object-fill h-5 w-5 sm:h-8 sm:w-8 lg:h-12 lg:w-12"/>,
    link: "/model-portfolio",
  },
  {
    id: 9,
    name: "Wordpress",
    icon: <IoLogoWordpress className="object-fill h-5 w-5 sm:h-8 sm:w-8 lg:h-12 lg:w-12"/>,
    link: "/art-facilitation",
  },
  {
    id: 10,
    name: "MongoDB",
    icon: <SiMongodb className="object-fill h-5 w-5 sm:h-8 sm:w-8 lg:h-12 lg:w-12"/>,
    link: "/model-portfolio",
  },
  {
    id: 11,
    name: "Nodemailer",
    icon: <SiProtonmail className="object-fill h-5 w-5 sm:h-8 sm:w-8 lg:h-12 lg:w-12"/>,
    link: "/landing-page",
  },
  {
    id: 12,
    name: "Google Maps",
    icon: <SiGooglemaps  className="object-fill h-5 w-5 sm:h-8 sm:w-8 lg:h-12 lg:w-12"/>,
    link: "/landing-page",
  },
  {
    id: 12,
    name: "Figma",
    icon: <SiFigma className="object-fill h-5 w-5 sm:h-8 sm:w-8 lg:h-12 lg:w-12"/>,
    link: "/psychologist",
  },
];

export default SkillsData;