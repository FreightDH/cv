import { ReactElement } from 'react';

import { Title } from 'shared/UI/Title';
import { useLanguage } from 'shared/lib/contexts/LanguageContext';

import ExperienceItem from './Item/ExperienceItem';
import experienceInfo from './experienceInfo';
import cl from './ExperienceSection.module.scss';

const Experience = (): ReactElement => {
  const { currentLanguage } = useLanguage();

  return (
    <section className={`section ${cl.experience}`}>
      <Title>{currentLanguage === 'eng' ? 'Experience' : 'Опыт работы'}</Title>
      <div>
        <ul>
          {currentLanguage === 'eng'
            ? experienceInfo['eng'].map(({ id, ...item }) => <ExperienceItem {...item} key={id} />)
            : experienceInfo['ru'].map(({ id, ...item }) => <ExperienceItem {...item} key={id} />)}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
