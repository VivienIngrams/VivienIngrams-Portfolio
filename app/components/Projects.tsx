import ProjectItem from "./ProjectItem";

const Projects: React.FC = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="mb-10 text-center font-poiret font-bold text-2xl uppercase tracking-widest">Projects</p>
        <div className="grid md:grid-cols-2 gap-8">
           <ProjectItem title='Research blog' backgroundImg="/assets/Projects/AlexSiteResearch.png" projectUrl='/alex' />
           <ProjectItem title='Model Portfolio' backgroundImg="/assets/Projects/KikoSite.png" projectUrl='/kiko' />
           <ProjectItem title='Art Facilitation' backgroundImg="/assets/Projects/KikoSiteBook.png" projectUrl='/celeste' />
        </div>
      </div>
    </div>
  );
};

export default Projects;
