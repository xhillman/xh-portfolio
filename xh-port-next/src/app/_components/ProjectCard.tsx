interface ProjectProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div>
      <h2>{project.projectName}</h2>
    </div>
  );
};

export default ProjectCard;
