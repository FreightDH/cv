import styles from './StudyItem.module.scss';

type Study = {
  title: string;
  text: string;
  level: string;
};

const StudyItem = ({ title, text, level }: Study) => {
  return (
    <li className={styles.study__item}>
      <p className={styles.study__title}>{title}</p>
      <p className={styles.study__text}>{text}</p>
      <p className={styles.study__level}>{level}</p>
    </li>
  );
};

export default StudyItem;
