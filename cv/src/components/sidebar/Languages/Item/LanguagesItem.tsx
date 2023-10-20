import styles from './LanguagesItem.module.scss';

type Language = {
  language: string;
  level: string;
};

const LanguagesItem = ({ language, level }: Language) => {
  return (
    <li className={styles.languages__item}>
      <p className={styles.languages__language}>{language}</p>
      <p className={styles.languages__level}>{level}</p>
    </li>
  );
};

export default LanguagesItem;
