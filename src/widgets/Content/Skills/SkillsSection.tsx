import { ReactElement } from 'react';

import skillsInfo from './skillsInfo';
import { Title } from 'shared';
import SkillsItem from './Item/SkillsItem';

import cl from './SkillsSection.module.scss';

const Skills = (): ReactElement => {
  return (
    <section className="section">
      <Title>Soft skills</Title>
      <div className={`${cl.skills__content} content--content`}>
        <ul className={cl.skills__list}>
          {skillsInfo.map(({ id, ...skill }) => (
            <SkillsItem {...skill} key={id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
