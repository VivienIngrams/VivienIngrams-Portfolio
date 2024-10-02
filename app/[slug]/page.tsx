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

const ProjectPage: React.FC<Props> = ({ params }: Props) => {
  const { slug } = params;

  const project = projects.find((proj) => proj.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <div className="w-full bg-[#ded8ca] font-raj min-h-screen">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={project.imgUrl}
          alt={project.title}
        />
        <div className="absolute top-[80%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
          <h2 className="uppercase font-poiret p-2">{project.title}</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4 py-4">
          <p className="text-red-900 pb-4">{project.description}</p>
          <div className="flex justify-around md:max-w-[20vw] md:justify-between">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <button className=" bg-[#ded8ca] px-6 py-2 mt-4 text-red-800">
                  Code
                </button>
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                <button className=" bg-[#ded8ca] px-6 py-2 mt-4  text-red-800">
                  Demo
                </button>
              </a>
            )}
            {project.designUrl && (
              <a href={project.designUrl} target="_blank" rel="noreferrer">
                <button className=" bg-[#ded8ca] px-6 py-2 mt-4 text-red-800">
                  Design
                </button>
              </a>
            )}
          </div>
        </div>

        <div className="col-span-4 md:col-span-1 uppercase bg-gradient-to-r from-red-900 to-red-950 shadow-md shadow-stone-400 py-4">
          <div className="p-2">
            <p className="text-center text-[#E6E3DE] font-poiret font-bold uppercase tracking-widest pb-2">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {project.technologies.map((tech) => (
                <p key={tech} className="text-[#E6E3DE] py-1 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> {tech}
                </p>
              ))}
            </div>
          </div>
        </div>

        <Link href="/#projects">
          <p className="text-red-900 md:-mt-16 uppercase font-poiret font-bold cursor-pointer">
            {" "}
            - Back
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;
