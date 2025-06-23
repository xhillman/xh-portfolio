import Link from "next/link";

interface ProjectProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="project-card relative h-full ease-in-out p-2 relative t-corner-brackets b-corner-brackets lg:mb-6 lg:h-fit group">
      <div className="project-details p-3 h-full bg-[#171717]">
              <h2 className="text-2xl font-bold w-fit"><Link href={project.projectURL} target="_blank" className="max-w-fit flex ease-in-out duration-200 group-hover:text-rose-500 group-hover:translate-x-1 group-hover:-translate-y-1">{project.projectName}<svg
                className="feather feather-arrow-up-right"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              ><line x1="7" x2="17" y1="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg></Link></h2>
      <p className="mb-4 lg:max-w-[90%]">{project.projectDescription}</p>
      <ul className="flex flex-wrap mb-4">
        {
          project.projectTech.map((tech: string) => {
            return <li className="text-sm py-1 px-2 m-1 bg-[#252525] rounded-lg" key={`${project.projectName} - ${tech}`}>{tech}</li>
          })
        }
      </ul>
      <p><Link href={project.projectURL} target="_blank" className="underline decoration-2 underline-offset-3 ease-in-out duration-200 group-hover:text-rose-500 group-hover:translate-x-1 group-hover:-translate-y-1">{project.projectLinkText}</Link></p>
      </div>

    </div>
  );
};

export default ProjectCard;
