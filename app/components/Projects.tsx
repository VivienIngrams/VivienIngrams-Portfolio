import ProjectItem from "./ProjectItem";

const Projects: React.FC = () => {
  return (
    <div
      id="projects"
      className="w-full py-24  bg-[#eff0e5]"
    >
      {" "}
      <div className="max-w-[900px] mx-auto px-4 py-4">
        <p className="mb-16 text-center font-poiret font-bold text-3xl md:text-4xl uppercase tracking-widest">
          Projects
        </p>
        <div className="grid  gap-8 md:gap-12">
          <ProjectItem
            title="Media Art Research"
            backgroundImg="/assets/Projects/ne.png"
            tech="Next JS"
            projectUrl="/ne"
          />
          <ProjectItem
            title="Photographer"
            backgroundImg="/assets/Projects/joel.png"
            tech="Next JS"
            projectUrl="/joel"
          />
          <ProjectItem
            title="Art Photography"
            backgroundImg="/assets/Projects/mathilde1.png"
            tech="Next JS"
            projectUrl="/mathilde"
          />
          <ProjectItem
            title="Art District App"
            backgroundImg="/assets/Projects/bombarda.png"
            tech="Next JS"
            projectUrl="/bombarda"
          />
          <ProjectItem
            title="Photography and art gallery"
            backgroundImg="/assets/Projects/2regards.png"
            tech="Next JS"
            projectUrl="/photography"
          />
          <ProjectItem
            title="Psychologist's professional website"
            backgroundImg="/assets/Projects/Marta.png"
            tech="Next JS"
            projectUrl="/psychologist"
          />
          <ProjectItem
            title="Research blog"
            backgroundImg="/assets/Projects/AlexSiteResearch1.png"
            tech="Next JS"
            projectUrl="/research-blog"
          />
          <ProjectItem
            title="Model Portfolio"
            backgroundImg="/assets/Projects/KikoSite.png"
            tech="Next JS"
            projectUrl="/model-portfolio"
          />
          <ProjectItem
            title="Art Facilitation"
            backgroundImg="/assets/Projects/CelesteSiteWorkshops.png"
            tech="Wordpress"
            projectUrl="/art-facilitation"
          />
          <ProjectItem
            title="Landing Page"
            backgroundImg="/assets/Projects/LandingPage.png"
            tech="Next JS"
            projectUrl="/landing-page"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
