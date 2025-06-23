import ProjectCard from "../_components/ProjectCard";
import * as projectData from "../_data/projects.json";

interface ProjectData {
  projectName: string;
  projectLinkText: string;
  projectURL: string;
  projectIcon: string;
  projectDescription: string;
  projectTech: string[];
}

export default function Projects() {
  const projects: ProjectData[] = projectData.projects;

  return (
    <div
      id="projects"
      className="box-border flex-auto flex flex-col gap-16 p-4 lg:flex-row relative overflow-auto"
    >
      <h1 className="text-5xl md:text-8xl lg:text-6xl xl:text-8xl font-black flex lg:items-end lg:sticky lg:top-0">PROJECTS</h1>

      <div className="project-card-container flex-auto flex flex-col items-center justify-center gap-8 pb-20 lg:max-h-[85vh] md:flex-row md:flex-wrap md:gap-12 lg:block">
        {
        projects.map((project) => {
          return <ProjectCard key={project.projectName} project={project} />;
        })
        
        }
                {
        projects.map((project) => {
          return <ProjectCard key={project.projectName} project={project} />;
        })
        
        }
                        {
        projects.map((project) => {
          return <ProjectCard key={project.projectName} project={project} />;
        })
        
        }
      </div>
    </div>
  );
}
