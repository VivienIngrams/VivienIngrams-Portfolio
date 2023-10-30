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
    icon: <IoLogoJavascript size={40} />,
    link: "/research-blog",
  },
  {
    id: 2,
    name: "Canva",
    icon: <SiCanva size={40} />,
    link: "/cv.pdf",
  },
  {
    id: 3,
    name: "React",
    icon: <IoLogoReact size={40} />,
    link: "/model-portfolio",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={40} />,
    link: "/model-portfolio",
  },
  {
    id: 5,
    name: "Firebase",
    icon: <IoLogoFirebase size={40} />,
    link: "/research-blog",
  },
  {
    id: 6,
    name: "Github",
    icon: <IoLogoGithub size={40} />,
    link: "https://github.com/VivienIngrams",
  },
  {
    id: 7,
    name: "NextJS",
    icon: <SiNextdotjs size={40} />,
    link: "/model-portfolio",
  },
  {
    id: 8,
    name: "Typescript",
    icon: <SiTypescript size={40} />,
    link: "/model-portfolio",
  },
  {
    id: 9,
    name: "Wordpress",
    icon: <IoLogoWordpress size={40} />,
    link: "/art-facilitation",
  },
  {
    id: 10,
    name: "MongoDB",
    icon: <SiMongodb size={40} />,
    link: "/model-portfolio",
  },
  {
    id: 11,
    name: "Nodemailer",
    icon: <SiProtonmail size={40} />,
    link: "/landing-page",
  },
  {
    id: 12,
    name: "Google Maps API",
    icon: <SiGooglemaps size={40} />,
    link: "/landing-page",
  },
];

export default SkillsData;