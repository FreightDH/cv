import { ReactElement } from 'react';

import { Title } from 'shared';
import { useLanguage } from 'shared/contexts/LanguageContext';

import cl from './AboutSection.module.scss';

const About = (): ReactElement => {
  const { currentLanguage } = useLanguage();

  return (
    <section className="section">
      <Title>{currentLanguage === 'eng' ? 'About me' : 'Обо мне'}</Title>
      <div className="content--content">
        <p className={cl.about__text}>
          {currentLanguage === 'eng'
            ? `I am currently studying in the fourth year of BSTU “Voenmeh” in St. Petersburg at the faculty of
          Software Development. I started learning web development in the summer of 2022. During this time I
          have passed a lot of courses, had experience in freelance. My goal is to become an experienced and
          in-demand developer, so I try to learn new things in web development almost all my free time from my
          university studies.`
            : `В настоящее время являюсь студентом четвертого курса БГТУ «ВОЕНМЕХ» им. Д.Ф. Устинова в 
          Санкт-Петербурге. Обучаюсь на направлении "Программная инженерия". Начал изучать веб-разработку летом 
          2022 года. За это время прошел множество курсов, был опыт работы на фрилансе. Моя цель - стать опытным 
          и востребованным разработчиком, поэтому я стараюсь изучать новое в сфере веб-разработки почти все свободное 
          от учебы в университете время.`}
        </p>
      </div>
    </section>
  );
};

export default About;
