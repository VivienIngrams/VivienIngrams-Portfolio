'use client'

import Image from "next/legacy/image";

const openResume = () => {
  window.open("cv.pdf", "_blank");
};

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="w-full min-h-[75vh] p-2 flex items-center py-16 mb-20  "
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className=" flex flex-col items-center justify-center col-span-2 font-pt">
          <h1 className=" p-4 tracking-widest uppercase font-poiret font-bold text-3xl">About
          </h1>
          <div className="p-4 py-10 font-pt text-justify">
                     From global stages to web pages, I am a versatile professional who has seamlessly merged a dancing career with frontend web development. I combine technical expertise with creative discipline to craft dynamic and captivating web experiences. With a strong foundation in JavaScript, React, and Next.js, my goal is to continue leveraging my diverse background to deliver high-quality digital solutions.          </div>
          <div className="py-10">
            <button onClick={openResume} className="px-8 py-2 bg-[rgba(248,230,207,0.1)] ">Resume</button>
          </div>
        </div>

        <div className="md:h-full  px-20  md:p-10 m-auto bg-transparent flex justify-center items-center hover:scale-105 ease-in duration-500">
          <Image
            className="border-4 border-[#e5e7eb] object-contain "
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
