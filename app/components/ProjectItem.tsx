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
        height={500}
        width={1000}
      />
      <div className="hidden font-raj group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <Link href={projectUrl}>
        <h4 className="text-md md:text-lg lg:text-3xl font-poiret font-bold uppercase tracking-wide text-white text-center whitespace-nowrap overflow-hidden text-ellipsis">
  {title}
</h4>

          
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
