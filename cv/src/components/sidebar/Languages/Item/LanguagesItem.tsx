import { ReactElement } from 'react';
import styles from './LanguagesItem.module.scss';

interface LanguageProps {
  language: string;
  level: string;
}

const LanguagesItem: React.FC<LanguageProps> = ({ language, level }): ReactElement => {
  return (
    <li className={styles.languages__item}>
      <p className={styles.languages__language}>{language}</p>
      <p className={styles.languages__level}>{level}</p>
    </li>
  );
};

export default LanguagesItem;
