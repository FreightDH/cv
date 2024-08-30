import { ReactElement } from 'react';

import styles from './SidebarIntro.module.scss';
import { useLanguage } from 'shared/lib/contexts/LanguageContext';

const SidebarIntro = (): ReactElement => {
  const { currentLanguage } = useLanguage();

  return (
    <div className={styles.SidebarIntro}>
      <div className={styles.intro__image}>
        <img src="assets/img/photo.jpg" alt="my-photo" />
      </div>
      <h1 className={styles.intro__name}>{currentLanguage === 'eng' ? 'Max Zolotkov' : 'Максим Золотков'}</h1>
      <h2 className={styles.intro__profession}>
        {currentLanguage === 'eng' ? 'Frontend developer' : 'Frontend-разработчик'}
      </h2>
    </div>
  );
};

export default SidebarIntro;
