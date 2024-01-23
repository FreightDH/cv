import { ReactElement } from 'react';

import styles from './SidebarIntro.module.scss';

const SidebarIntro = (): ReactElement => {
  return (
    <div className={styles.SidebarIntro}>
      <div className={styles.intro__image}>
        <img src="assets/img/photo.jpg" alt="my-photo" />
      </div>
      <h1 className={styles.intro__name}>Max Zolotkov</h1>
      <h2 className={styles.intro__profession}>Frontend developer</h2>
    </div>
  );
};

export default SidebarIntro;
