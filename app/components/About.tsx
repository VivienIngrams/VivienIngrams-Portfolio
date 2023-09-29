'use client'

import Image from "next/image";

const openResume = () => {
  window.open("cv.pdf", "_blank");
};

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen p-2 flex items-center py-16 mb-20 bg-gradient-to-b from-[#cec8ba]  via-transparent to-transparent "
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className=" flex flex-col items-center justify-center col-span-2 font-pt">
          <div className=" p-4 tracking-widest uppercase font-poiret font-bold text-3xl">About
          </div>
          <div className="p-4 py-10 font-pt">
            From global stages to web pages, I am a versatile professional in
            the performing arts now infusing creativity into code as a Frontend
            Web Developer, crafting dynamic and captivating web experiences.
            Proficient in JavaScript, React, and Next.js, I aim to leverage my
            creative discipline to deliver high-quality digital solutions.
          </div>
          <div className="py-10">
            <button onClick={openResume} className="px-8 py-2 ">Resume</button>
          </div>
        </div>

        <div className="md:h-full  px-20 md:p-10 m-auto bg-transparent flex justify-center items-center hover:scale-105 ease-in duration-500">
          <Image
            className="border-4 border-[#e5e7eb] shadow-md shadow-gray-400"
            src="/Vivien.jpg"
            width={200}
            height={400}
            alt="Vivien's face"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
