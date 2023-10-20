import ContentTitle from '../Title/ContentTitle';
import ExperienceItem from './Item/ExperienceItem';
import experienceInfo from './experienceInfo';
import styles from './ExperienceSection.module.scss';

const Experience = () => {
  return (
    <section className={`section ${styles.Experience}`}>
      <ContentTitle>Experience</ContentTitle>
      <div>
        <ul>
          {experienceInfo.map((item) => (
            <ExperienceItem {...item} key={Math.random().toString()} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
