import { ReactElement } from 'react';
import { iconPath } from '../../../variables';
import styles from './ProjectItem.module.scss';

interface ProjectProps {
  stack: string;
  title: string;
  description: string;
  repository: string;
  deploy: string;
}

const ProjectsItem: React.FC<ProjectProps> = ({ stack, title, description, repository, deploy }): ReactElement => {
  return (
    <li className={styles.projects__project}>
      <div className={styles.project__header}>
        <div className={styles.header__stack}>{stack}</div>
        <div className={styles.header__links}>
          <a href={repository} target="_blank" rel="noreferrer">
            <img src={`${iconPath}projects/github.svg`} alt="github-icon" />
          </a>
          <a href={deploy} target="_blank" rel="noreferrer">
            <img src={`${iconPath}projects/browser.svg`} alt="browser-icon" />
          </a>
        </div>
      </div>
      <div className={styles.project__body}>
        <div className={styles.project__title}>{title}</div>
        <p className={styles.project__description}>{description}</p>
      </div>
    </li>
  );
};

export default ProjectsItem;
