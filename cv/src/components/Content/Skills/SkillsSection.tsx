import { ReactElement } from 'react';
import ContentTitle from '../Title/ContentTitle';
import SkillsItem from './Item/SkillsItem';
import skillsInfo from './skillsInfo';
import styles from './SkillsSection.module.scss';

const Skills = (): ReactElement => {
  return (
    <section className="section">
      <ContentTitle>Soft skills</ContentTitle>
      <div className={`${styles.skills__content} content--content`}>
        <ul className={styles.skills__list}>
          {skillsInfo.map(({ id, ...skill }) => (
            <SkillsItem {...skill} key={id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
