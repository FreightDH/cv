import ContentTitle from '../Content/Title/ContentTitle';
import ProjectsItem from './Item/ProjectItem';
import projectsInfo from './projectsInfo';
import './Projects.scss';

const Projects = () => {
  return (
    <div className="page__projects">
      <ContentTitle>Latest projects</ContentTitle>
      <ul className="projects__list">
        {projectsInfo.map((project) => (
          <ProjectsItem {...project} key={Math.random().toString()} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
