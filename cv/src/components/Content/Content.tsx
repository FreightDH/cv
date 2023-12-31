import { ReactElement } from 'react';
import './Content.scss';
import About from './About/AboutSection';
import Skills from './Skills/SkillsSection';
import Tools from './Tools/ToolsSection';
import Experience from './Experience/ExperienceSection';

const Content = (): ReactElement => {
  return (
    <div className="content">
      <About />
      <Skills />
      <Tools />
      <Experience />
    </div>
  );
};

export default Content;
