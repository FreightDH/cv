import ContentTitle from '../Title/ContentTitle';
import ExperienceItem from './Item/ExperienceItem';
import experienceInfo from './experienceInfo';
import './ExperienceSection.scss';

const Experience = () => {
  return (
    <section className="section experience">
      <ContentTitle>Experience</ContentTitle>
      <div className="">
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
