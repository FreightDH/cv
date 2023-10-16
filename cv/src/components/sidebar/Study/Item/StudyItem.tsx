import styles from './StudyItem.module.scss';

const StudyItem = ({ title, text, level }: Record<string, string>) => {
  return (
    <li className={styles.study__item}>
      <p className={styles.study__title}>{title}</p>
      <p className={styles.study__text}>{text}</p>
      <p className={styles.study__level}>{level}</p>
    </li>
  );
};

export default StudyItem;
