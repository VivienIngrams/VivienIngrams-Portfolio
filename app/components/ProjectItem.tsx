import Image from "next/legacy/image";
import Link from "next/link";

interface ProjectItemProps {
  title: string;
  backgroundImgMobile: string;
  backgroundImg: string;
  projectUrl: string;
  demoUrl: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  backgroundImgMobile,
  backgroundImg,
  projectUrl,
  demoUrl,
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-md shadow-stone-400 border-2 rounded border-stone-400 group hover:bg-gradient-to-r from-[black] to-red-800">
      {/* Use different images for small and larger screens */}
      <div className="block sm:hidden relative w-full h-[600px]">
  <Image
    className="group-hover:opacity-20 rounded object-fill"
    src={backgroundImgMobile}
    alt="Website project"
    layout="fill"
  />
</div>
      <div className="hidden sm:block">
        <Image
          className="group-hover:opacity-20 rounded"
          src={backgroundImg}
          alt="Website project"
          height={500} // Landscape orientation for larger screens
          width={1000}
        />
      </div>
      <div className="hidden font-raj group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <Link href={projectUrl}>
          <h4 className="text-lg md:text-xl lg:text-3xl 2xl:text-4xl font-poiret font-bold uppercase tracking-wide text-white text-center whitespace-nowrap overflow-hidden text-ellipsis">
            {title}
          </h4>
        </Link>
        {/* Flex container for horizontal alignment */}
        <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-4">
          <Link href={demoUrl}>
            <div className="px-4 py-2 rounded font-semibold bg-white/80 hover:bg-white text-red-900 text-sm md:text-base shadow-md transition-all duration-200">
              Visit Site
            </div>
          </Link>
          <Link href={projectUrl}>
            <div className="px-4 py-2 rounded backdrop-blur bg-transparent border border-white/70 hover:bg-white hover:text-slate-800 text-white text-sm md:text-base shadow-md transition-all duration-200">
              More Info
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
