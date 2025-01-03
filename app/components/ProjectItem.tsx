import Image from "next/legacy/image";
import Link from "next/link";

interface ProjectItemProps {
    title: string;
    backgroundImg: string;
    tech: string;
    projectUrl: string;
  }
  
  const ProjectItem: React.FC<ProjectItemProps> = ({ title, backgroundImg, tech, projectUrl}) => {
  return (
    <div className="relative flex item-center justify-center h-auto w-full shadow-md shadow-stone-400 border-2 rounded border-stone-400 group hover:bg-gradient-to-r from-[black] to-red-800">
      <Image
        className=" group-hover:opacity-20 rounded"
        src={backgroundImg}
        alt="Website project"
        height={400}
        width={800}
      />
      <div className="hidden font-raj group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h4 className="text-xs md:text-lg lg:text-2xl font-poiret font-bold uppercase tracking-wider text-white">
         {title}
        </h4>
        {/* <p className="hidden md:block pb-4 pt-2 text-white text-center">{tech}</p> */}
        <Link href={projectUrl}>
          <div className="mt-2 p-2  bg-white/50 text-slate-600 font-bold text-xs md:text-md cursor-pointer text-center">
            More info
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
