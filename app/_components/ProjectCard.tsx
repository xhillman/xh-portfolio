interface ProjectProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="project-card relative perspective-near transition-transform ease-in-out p-2 relative t-corner-brackets b-corner-brackets max-w-[320px] lg:inline-block lg:max-w-full lg:w-full lg:min-h-0 lg:mb-8">
      <div className="project-details p-3 bg-[#171717] min-h-[300px]">
              <h2 className="text-2xl font-bold">{project.projectName}</h2>
      <p className="mb-4 lg:max-w-[90%]">{project.projectDescription}</p>
      <ul className="flex flex-wrap max-w-9/10">
        {
          project.projectTech.map((tech: string) => {
            return <li className="text-sm py-1 px-2 m-1 bg-[#252525] rounded-lg" key={`${project.projectName} - ${tech}`}>{tech}</li>
          })
        }
      </ul>
      </div>

    </div>
  );
};

export default ProjectCard;
