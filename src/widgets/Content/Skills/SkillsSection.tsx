import { ReactElement } from 'react';

import { Title } from 'shared/UI/Title';
import { useLanguage } from 'shared/lib/contexts/LanguageContext';

import SkillsItem from './Item/SkillsItem';
import skillsInfo from './skillsInfo';
import cl from './SkillsSection.module.scss';

const Skills = (): ReactElement => {
  const { currentLanguage } = useLanguage();

  return (
    <section className="section">
      <Title>Soft skills</Title>
      <div className={`${cl.skills__content} content--content`}>
        <ul className={cl.skills__list}>
          {currentLanguage === 'eng'
            ? skillsInfo['eng'].map(({ id, ...skill }) => <SkillsItem {...skill} key={id} />)
            : skillsInfo['ru'].map(({ id, ...skill }) => <SkillsItem {...skill} key={id} />)}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
