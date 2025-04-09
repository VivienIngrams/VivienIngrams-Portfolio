import ProjectItem from "./ProjectItem";
import Image from "next/image";

const backgroundImgLight =
  "https://images.unsplash.com/photo-1608114759160-ad0b1bac35b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80";

const Projects: React.FC = () => {
  return (
    <div
      id="projects"
      className="w-full py-24 relative "
    >
            <Image
                className="absolute top-0 left-0 right-0 bottom-0 min-h-screen bg-fixed bg-center bg-cover h-full w-full "
                src={backgroundImgLight}
                width={1000}
                height={1500}
                alt="Sand"
              />
              <div className="absolute top-0 left-0 w-full min-h-screen bg-cover bg-gradient-to-b from-[rgb(239,240,229,0.8)] via-[rgba(236,202,202,0.5)] to-[rgb(239,240,229,0.8)] h-full"></div>{" "}
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
