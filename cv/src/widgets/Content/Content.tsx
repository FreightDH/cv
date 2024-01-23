import { ReactElement } from 'react';

import About from './About/AboutSection';
import Skills from './Skills/SkillsSection';
import Tools from './Tools/ToolsSection';
import Experience from './Experience/ExperienceSection';

import cl from './Content.module.scss';

const Content = (): ReactElement => {
  return (
    <div className={cl.content}>
      <About />
      <Skills />
      <Tools />
      <Experience />
    </div>
  );
};

export default Content;
