import ContentTitle from '../Title/ContentTitle';
import SkillsItem from './Item/SkillsItem';
import skillsInfo from './skillsInfo';
import './SkillsSection.scss';

const Skills = () => {
  return (
    <section className="skills">
      <ContentTitle>Soft skills</ContentTitle>
      <div className="skills__content content--content">
        <ul className="skills__list">
          {skillsInfo.map((skill) => (
            <SkillsItem text={skill} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
