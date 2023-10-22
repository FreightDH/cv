import { ReactElement } from 'react';
import styles from './SidebarIntro.module.scss';

interface IntroProps {
  src: string;
  alt: string;
}

const SidebarIntro: React.FC<IntroProps> = ({ src, alt }): ReactElement => {
  return (
    <div className={styles.SidebarIntro}>
      <div className={styles.intro__image}>
        <img src={src} alt={alt} />
      </div>
      <h1 className={styles.intro__name}>Max Zolotkov</h1>
      <h2 className={styles.intro__profession}>Frontend developer</h2>
    </div>
  );
};

export default SidebarIntro;
