import { ReactElement } from 'react';

import experienceInfo from './experienceInfo';
import { Title } from 'shared';
import ExperienceItem from './Item/ExperienceItem';

import cl from './ExperienceSection.module.scss';

const Experience = (): ReactElement => {
  return (
    <section className={`section ${cl.experience}`}>
      <Title>Experience</Title>
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
