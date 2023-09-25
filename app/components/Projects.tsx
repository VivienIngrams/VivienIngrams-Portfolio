import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="tex-xl uppercase tracking-widest">Projects</p>
        <h4 className="py-4">What I have built</h4>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="relative flex item-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[black] to-red-800">
                <Image className="rounded-xl group-hover:opacity-30" src="/assets/Projects/AlexSite.png" alt="Alex's website" height={500} width={800}/>
           <div className="hidden font-raj group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h4 className="text-2xl font-normal uppercase tracking-wider text-white">Research Portfolio</h4>
            <p className="pb-4 pt-2 text-white text-center">Next JS</p>
            <Link href="alex-ingrams.vercel.app">
            <p className="py-3 text-white text-center">More info</p></Link>
           </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
