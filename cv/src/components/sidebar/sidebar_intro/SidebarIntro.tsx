import React from 'react';
import styles from './SidebarIntro.module.scss';

const SidebarIntro = ({ src, alt }: Record<string, string>) => {
  return (
    <div className="sidebar__intro">
      <div className={styles.intro__image}>
        <img src={src} alt={alt} />
      </div>
      <h1 className={styles.intro__name}>Max Zolotkov</h1>
      <h2 className={styles.intro__profession}>Frontend developer</h2>
    </div>
  );
};

export default SidebarIntro;
