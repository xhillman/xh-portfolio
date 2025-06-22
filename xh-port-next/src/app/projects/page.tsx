import ProjectCard from "../_components/ProjectCard"
import * as projectData from "../_data/projects.json"

interface ProjectData {
  projectName: string,
  projectLinkText: string,
  projectURL: string,
  projectIcon: string,
  projectDescription: string,
  projectTech: string[]
}

export default function Projects () {

  const projects: ProjectData[] = projectData.projects; 
  
  return (
    <div id="projects" className="box-border h-full w-full p-4 relative">
        <h1 className="text-4xl">Projects</h1>
        {
          projects.map((project) => {
            return <ProjectCard key={project.projectName} project={project} />
          }
          )
        }
    </div>
  )
}