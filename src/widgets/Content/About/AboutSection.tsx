import { ReactElement } from 'react';
import { Title } from 'shared';
import cl from './AboutSection.module.scss';

const About = (): ReactElement => {
  return (
    <section className="section">
      <Title>About me</Title>
      <div className="content--content">
        <p className={cl.about__text}>
          I am currently studying in the third year of BSTU “Voenmeh” in St. Petersburg at the faculty of
          Software Development. I started learning web development in the summer of 2022. My goal is to become
          an experienced and in-demand developer. I'm fond of web development and study new things in this
          field almost all my free time from studying at the university.
        </p>
      </div>
    </section>
  );
};

export default About;
