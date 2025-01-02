"use client";

import React from "react";
import Link from "next/link";
import SkillsData  from "./SkillsData";

const Skills: React.FC = () => {
  return (
    <div id="skills" className="w-full lg:h-screen px-4 md:py-24 font-poiret font-bold">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="my-16 text-3xl  md:text-4xl text-center font-poiret  tracking-widest uppercase">
          Skills
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-16 font-raj  md:mx-8">
          {SkillsData.map((skill: any) => (
            <Link href={skill.link} key={skill.id}>
              <div className="p-3 md:px-8  shadow-md bg-stone-100 border-2 rounded border-stone-400  hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 justify-center items-center">
                  <div className=" flex justify-center items-center">{skill.icon}</div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-xs md:text-lg">{skill.name}</p>
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
