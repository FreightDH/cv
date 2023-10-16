import styles from './LanguagesItem.module.scss';

const LanguagesItem = ({ language, level }: Record<string, string>) => {
  return (
    <li className={styles.languages__item}>
      <p className={styles.languages__language}>{language}</p>
      <p className={styles.languages__level}>{level}</p>
    </li>
  );
};

export default LanguagesItem;
