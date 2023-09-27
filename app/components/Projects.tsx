import ProjectItem from "./ProjectItem";

const Projects: React.FC = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="mb-10 text-center font-poiret font-bold text-3xl uppercase tracking-widest">Projects</p>
        <div className="grid md:grid-cols-2 gap-8">
           <ProjectItem title='Research blog' backgroundImg="/assets/Projects/AlexSiteResearch1.png" tech='Next JS' projectUrl='/research-blog' />
           <ProjectItem title='Model Portfolio' backgroundImg="/assets/Projects/KikoSite.png" tech='Next JS' projectUrl='/model-portfolio' />
           <ProjectItem title='Art Facilitation' backgroundImg="/assets/Projects/CelesteSiteWorkshops.png" tech='Wordpress' projectUrl='/art-facilitation' />
        </div>
      </div>
    </div>
  );
};

export default Projects;
