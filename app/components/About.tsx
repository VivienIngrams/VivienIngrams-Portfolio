import Image from "next/image"

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16 bg-gradient-to-b from-[#cec8ba]  via-transparent to-transparent ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className=" flex flex-col items-center justify-center col-span-2 font-pt">
          <div className=" p-4 tracking-widest uppercase font-raj text-xl text-[#8d3a17d5]">About</div>
          <div className="p-4 py-10">
            From global stages to web pages, I am a versatile professional in the
            performing arts now infusing creativity into code as a Frontend Web
            Developer, crafting dynamic and captivating web experiences.
            Proficient in JavaScript, React, and Next.js, I aim to leverage my
            creative discipline to deliver high-quality digital solutions.
          </div>
        
        </div>
        
        <div className="h-full p-20 md:p-10 m-auto bg-transparent flex justify-center items-center hover:scale-105 ease-in duration-500">
          <Image className=" shadow-xl shadow-gray-400"
          src="/Vivien.jpg"
          width={1000}
          height={600}
          alt="Vivien's face" />
        </div>
      </div>
    </div>
   
  );
};

export default About;
