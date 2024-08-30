import { ReactElement } from 'react';

import { Title } from 'shared/UI/Title';
import { useLanguage } from 'shared/lib/contexts/LanguageContext';

import projectsInfo from './projectsInfo';
import ProjectsItem from './Item/ProjectItem';
import cl from './Projects.module.scss';

const Projects = (): ReactElement => {
  const { currentLanguage } = useLanguage();
  return (
    <div>
      <Title>{currentLanguage === 'eng' ? 'Latest projects' : 'Последние проекты'}</Title>
      <ul className={cl.projects__list}>
        {currentLanguage === 'eng'
          ? projectsInfo['eng'].map(({ id, ...project }) => <ProjectsItem {...project} key={id} />)
          : projectsInfo['ru'].map(({ id, ...project }) => <ProjectsItem {...project} key={id} />)}
      </ul>
    </div>
  );
};

export default Projects;
