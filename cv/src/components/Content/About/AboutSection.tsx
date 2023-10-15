import ContentTitle from '../Title/ContentTitle';
import './AboutSection.scss';

const About = () => {
  return (
    <section className="about">
      <ContentTitle>About me</ContentTitle>
      <div className="content--content">
        <p className="about__text">
          I am currently studying in the third year of BSTU “Voenmeh” in St. Petersburg at the faculty of Software
          Development. I started learning web development in the summer of 2022. My goal is to become an experienced and
          in-demand developer. I'm fond of web development and study new things in this field almost all my free time
          from studying at the university.
        </p>
      </div>
    </section>
  );
};

export default About;
