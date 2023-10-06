"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
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
} from "react-icons/si";

const openResume = () => {
  window.open("cv.pdf", "_blank");
};

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full lg:h-screen p-2 py-24 font-poiret font-bold"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="mb-16 text-3xl text-center font-poiret font-bold tracking-widest uppercase">
          Skills
        </p>
        <div className="grid  grid-cols-2 lg:grid-cols-4 gap-10 font-raj">
          <Link href="/research-blog">
            <div className="p-6 shadow-md bg-[#f3f2ee] border-[#e5e7eb] border-4  hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-2 justify-center items-center">
                <div className="m-auto">
                  <IoLogoJavascript size={40} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
          </Link>
          <div onClick={openResume}>
            <div className="p-6 shadow-md bg-[#f3f2ee] border-[#e5e7eb]  border-4  hover:scale-105 ease-in duration-300 hover:cursor-pointer">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <SiCanva size={40} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p>Canva</p>
                </div>
              </div>
            </div>
          </div>
          <Link href="/model-portfolio">
            <div className="p-6 shadow-md  bg-[#f3f2ee] border-[#e5e7eb]  border-4  hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <IoLogoReact size={40} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p>React</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/model-portfolio">
            <div className="p-6 shadow-md  bg-[#f3f2ee] border-[#e5e7eb]  border-4  hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <SiTailwindcss size={40} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p>Tailwind CSS</p>
                </div>
              </div>
            </div>{" "}
          </Link>
          <Link href="/research-blog">
            {" "}
            <div className="p-6 shadow-md border-[#e5e7eb]  bg-[#f3f2ee]  border-4  hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <IoLogoFirebase size={40} />{" "}
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p>Firebase</p>
                </div>
              </div>
            </div>
          </Link>
          <a href="https://github.com/VivienIngrams">
            <div className="p-6 shadow-md  bg-[#f3f2ee] border-[#e5e7eb]  border-4  hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <IoLogoGithub size={40} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p>Github</p>
                </div>
              </div>
            </div>
          </a>
          <Link href="/model-portfolio">
            <div className="p-6 shadow-md  bg-[#f3f2ee] border-[#e5e7eb] border-4  hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <SiNextdotjs size={40} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p>NextJS</p>
                </div>
              </div>
            </div>{" "}
          </Link>
          <Link href="/model-portfolio">
            <div className="p-6 shadow-md   bg-[#f3f2ee] border-4 border-[#e5e7eb] hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <SiTypescript size={40} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p>Typescript</p>
                </div>
              </div>
            </div>
          </Link>

          <a href="https://celesteingrams.com">
            <div className="p-6 shadow-md   bg-[#f3f2ee] border-4 border-[#e5e7eb] hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <IoLogoWordpress size={40} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p>Wordpress</p>
                </div>
              </div>
            </div>
          </a>
          <Link href="/model-portfolio">
            <div className="p-6 shadow-md   bg-[#f3f2ee] border-4 border-[#e5e7eb] hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <SiMongodb size={40} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p>MongoDB</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;
