import { ReactElement } from 'react';
import ContentTitle from '../Title/ContentTitle';
import ExperienceItem from './Item/ExperienceItem';
import experienceInfo from './experienceInfo';
import styles from './ExperienceSection.module.scss';

const Experience = (): ReactElement => {
  return (
    <section className={`section ${styles.Experience}`}>
      <ContentTitle>Experience</ContentTitle>
      <div>
        <ul>
          {experienceInfo.map(({ id, ...item }) => (
            <ExperienceItem {...item} key={id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
