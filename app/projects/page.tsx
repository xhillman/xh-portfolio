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
      className="box-border flex-auto flex flex-col gap-16 p-4 lg:flex-row relative "
    >
      <h1 className="text-5xl md:text-8xl lg:text-6xl xl:text-8xl font-black flex lg:items-end lg:sticky lg:top-0">PROJECTS</h1>

      <div className="project-card-container flex-auto flex flex-col gap-8 items-center justify-center md:grid grid-cols-2 auto-rows-[1fr] lg:max-h-[85vh] lg:block sticky top-0 overflow-y-scroll lg:pr-6  lg:[&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
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
