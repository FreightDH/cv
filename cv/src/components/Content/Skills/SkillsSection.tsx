import ContentTitle from '../Title/ContentTitle';
import SkillsItem from './Item/SkillsItem';
import skillsInfo from './skillsInfo';
import styles from './SkillsSection.module.scss';

const Skills = () => {
  return (
    <section className="section">
      <ContentTitle>Soft skills</ContentTitle>
      <div className={`${styles.skills__content} content--content`}>
        <ul className={styles.skills__list}>
          {skillsInfo.map((skill) => (
            <SkillsItem text={skill} key={Math.random().toString()} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
