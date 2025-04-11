import ProjectItem from "./ProjectItem";
import { projects } from "../projectsData";

const Projects: React.FC = () => {
  return (
    <div id="projects" className="w-full py-24 relative">
      <div className="md:max-w-[75vw] xl:max-w-[1000px] mx-auto px-4 py-4">
        <p className="mb-16 text-center font-poiret font-bold text-3xl md:text-4xl uppercase tracking-widest">
          Projects
        </p>
        <div className="grid gap-8 md:gap-16">
          {projects.map((project) => (
            <ProjectItem
              key={project.slug}
              title={project.title}
              backgroundImg={project.imgUrl2}
              backgroundImgMobile={project.img}
              projectUrl={`/${project.slug}`}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
