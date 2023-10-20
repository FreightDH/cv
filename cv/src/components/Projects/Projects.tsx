import ContentTitle from '../Content/Title/ContentTitle';
import ProjectsItem from './Item/ProjectItem';
import projectsInfo from './projectsInfo';
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <div>
      <ContentTitle>Latest projects</ContentTitle>
      <ul className={styles.projects__list}>
        {projectsInfo.map((project, index) => (
          <ProjectsItem {...project} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
