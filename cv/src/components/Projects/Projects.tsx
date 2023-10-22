import { ReactElement } from 'react';
import ContentTitle from '../Content/Title/ContentTitle';
import ProjectsItem from './Item/ProjectItem';
import projectsInfo from './projectsInfo';
import styles from './Projects.module.scss';

const Projects = (): ReactElement => {
  return (
    <div>
      <ContentTitle>Latest projects</ContentTitle>
      <ul className={styles.projects__list}>
        {projectsInfo.map(({ id, ...project }) => (
          <ProjectsItem {...project} key={id} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
