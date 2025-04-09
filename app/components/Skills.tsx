"use client";

import React from "react";
import Link from "next/link";
import SkillsData  from "./SkillsData";

const Skills: React.FC = () => {
  return (
    <div id="skills" className="w-full lg:h-screen px-4 md:py-24 font-poiret font-bold">
      <div className="max-w-[900px] mx-auto flex flex-col justify-center h-full">
        <p className="my-16 text-3xl  md:text-4xl text-center font-poiret  tracking-widest uppercase">
          Skills
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-14 font-raj  md:mx-8">
          {SkillsData.map((skill: any) => (
            <Link href={skill.link} key={skill.id}>
              <div className="p-3 md:px-4  shadow-md bg-white border-2 rounded border-stone-400  hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-5 justify-center items-center">
                  <div className=" flex justify-center col-span-2 items-center ">{skill.icon}</div>
                  <div className="flex flex-col items-center col-span-3 justify-center">
                    <p className="text-xs md:text-[17px] ">{skill.name}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
