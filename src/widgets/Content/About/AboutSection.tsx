import { ReactElement } from 'react';

import { Title } from 'shared/UI/Title';
import { useLanguage } from 'shared/lib/contexts/LanguageContext';

import cl from './AboutSection.module.scss';

const About = (): ReactElement => {
  const { currentLanguage } = useLanguage();

  return (
    <section className="section">
      <Title>{currentLanguage === 'eng' ? 'About me' : 'Обо мне'}</Title>
      <div className="content--content">
        {currentLanguage === 'eng' ? (
          <>
            <p className={cl.about__text}>
              More than 3 years of web development experience, 1.5 years of which is commercial
            </p>
            <br />
            <p className={cl.about__text}>
              I am constantly improving my knowledge and skills in the field of development, not afraid of
              difficulties and able to adapt quickly to new technologies
            </p>
            <br />
            <p className={cl.about__text}>
              My specialization is creating web applications (websites) using React and TypeScript. I have
              experience working with REST API, CI/CD, and integration of third-party services
            </p>
            <br />
            <p className={cl.about__text}>
              I strive to create user-friendly and reliable solutions that benefit users and businesses
            </p>
          </>
        ) : (
          <>
            <p className={cl.about__text}>Опыт веб-разработки более 3 лет, из них 1,5 года — коммерческий</p>
            <br />
            <p className={cl.about__text}>
              Постоянно совершенствую свои знания и навыки в сфере разработки, не боюсь трудностей и умею
              быстро адаптироваться к новым технологиям
            </p>
            <br />
            <p className={cl.about__text}>
              Специализируюсь на создании веб-приложений (сайтов) с использованием React и TypeScript, имею
              опыт работы с REST API, CI/CD, интеграцией сторонних сервисов
            </p>
            <br />
            <p className={cl.about__text}>
              Стремлюсь к созданию удобных и надёжных решений, которые приносят пользу пользователям и бизнесу
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default About;
