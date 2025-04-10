import Image from "next/legacy/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { projects } from "../projectsData";

interface Project {
  slug: string;
  title: string;
  description: string;
  imgUrl: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  designUrl?: string;
}

type Props = {
  params: {
    slug: string;
  };
};

const backgroundImgLight = "https://images.unsplash.com/photo-1608114759160-ad0b1bac35b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80";
const ProjectPage: React.FC<Props> = ({ params }: Props) => {
  const { slug } = params;

  const project = projects.find((proj) => proj.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <div className="w-full  font-raj min-h-screen">
      <div
  className="absolute inset-0 z-[-1] bg-repeat-y bg-top bg-[length:100%_100vh]"
  style={{
    backgroundImage: `
      repeating-linear-gradient(
        to bottom,
        rgba(239,240,229,0.8),
        rgba(217,224,198,0.7),
        rgba(239,240,229,0.8),
        rgba(224,203,198,0.7),
        rgba(239,240,229,0.8) 100vh
      ),
      url('${backgroundImgLight}')
    `
  }}
></div>
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={project.imgUrl}
          alt={project.title}
        />
        <div className="absolute top-[80%] md:max-w-[75vw] xl:max-w-[1000px]  w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
          <h2 className="uppercase text-4xl xl:text-5xl font-poiret p-4">{project.title}</h2>
        </div>
      </div>

      <div className="md:max-w-[75vw] xl:max-w-[1000px] bg-[rgb(#eff0e5)] mx-auto grid lg:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-red-900 p-4 lg:mr-20">{project.description}</p>
          <div className="flex px-4 justify-around md:max-w-[25vw] md:justify-between text-orange-50">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <button className="  px-6 py-2 mt-4 border-2 rounded border-stone-400 ">
                  Code
                </button>
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                <button className="  px-6 py-2 mt-4 border-2 rounded border-stone-400  ">
                  Demo
                </button>
              </a>
            )}
            {project.designUrl && (
              <a href={project.designUrl} target="_blank" rel="noreferrer">
                <button className=" px-6 py-2 mt-4 border-2 rounded border-stone-400 ">
                  Design
                </button>
              </a>
            )}
          </div>
          <Link href="/#projects">
          <p className="hidden md:flex text-red-900 p-4 md:pt-10 uppercase font-poiret font-bold cursor-pointer">
            {" "}
            - Back
          </p>
        </Link>
        </div>

        <div className=" col-span-4 lg:col-span-1 uppercase  border-stone-400 border-2 bg-red-900  rounded-md shadow-md shadow-stone-400 m-4 py-4 md:-mr-12">
          <div className="p-4">
            <p className="text-center text-[#E6E3DE] text-xl font-poiret font-bold uppercase tracking-widest pb-3">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {project.technologies.map((tech) => (
                <p key={tech} className="text-[#E6E3DE] py-1 pr-2 flex items-center">
                  <RiRadioButtonFill className="pr-1 text-xs md:text-md" /> {tech}
                </p>
              ))}
            </div>
          </div>
        </div>

        <Link href="/#projects">
          <p className="-mt-4 md:hidden text-red-900 p-4 uppercase font-poiret font-bold cursor-pointer">
            {" "}
            - Back
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;
