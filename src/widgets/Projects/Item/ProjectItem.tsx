import { ReactElement } from 'react';
import cl from './ProjectItem.module.scss';

interface ProjectProps {
  stack: string;
  title: string;
  description: string;
  repository: string;
  deploy: string;
}

const ProjectsItem: React.FC<ProjectProps> = ({
  stack,
  title,
  description,
  repository,
  deploy,
}): ReactElement => {
  return (
    <li className={cl.projects__project}>
      <div className={cl.project__header}>
        <div className={cl.header__stack}>{stack}</div>
        <div className={cl.header__links}>
          <a href={repository} target="_blank" rel="noreferrer">
            <img src="assets/icons/projects/github.svg" alt="github-icon" />
          </a>
          <a href={deploy} target="_blank" rel="noreferrer">
            <img src="assets/icons/projects/browser.svg" alt="browser-icon" />
          </a>
        </div>
      </div>
      <div className={cl.project__body}>
        <div className={cl.project__title}>{title}</div>
        <p className={cl.project__description}>{description}</p>
      </div>
    </li>
  );
};

export default ProjectsItem;
