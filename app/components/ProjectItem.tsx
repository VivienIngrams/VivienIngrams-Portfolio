import Image from "next/image";
import Link from "next/link";

interface ProjectItemProps {
    title: string;
    backgroundImg: string;
    tech: string;
    projectUrl: string;
  }
  
  const ProjectItem: React.FC<ProjectItemProps> = ({ title, backgroundImg, tech, projectUrl}) => {
  return (
    <div className="relative flex item-center justify-center h-auto w-full shadow-md shadow-gray-400 border-4 border-[#e5e7eb] group hover:bg-gradient-to-r from-[black] to-red-800">
      <Image
        className=" group-hover:opacity-20"
        src={backgroundImg}
        alt="Alex's website"
        height={500}
        width={800}
      />
      <div className="hidden font-raj group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h4 className="text-2xl font-poiret font-bold uppercase tracking-wider text-white">
         {title}
        </h4>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <Link href={projectUrl}>
          <p className="py-3 bg-white text-slate-600 font-bold text-lg cursor-pointer text-center">
            More info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
