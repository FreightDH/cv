import { ReactElement } from 'react';

import projectsInfo from './projectsInfo';
import { Title } from 'shared';
import ProjectsItem from './Item/ProjectItem';

import cl from './Projects.module.scss';

const Projects = (): ReactElement => {
  return (
    <div>
      <Title>Latest projects</Title>
      <ul className={cl.projects__list}>
        {projectsInfo.map(({ id, ...project }) => (
          <ProjectsItem {...project} key={id} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
