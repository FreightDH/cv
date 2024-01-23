import { ReactElement } from 'react';
import styles from './StudyItem.module.scss';

interface StudyProps {
  title: string;
  text: string;
  level: string;
}

const StudyItem: React.FC<StudyProps> = ({ title, text, level }): ReactElement => {
  return (
    <li className={styles.study__item}>
      <p className={styles.study__title}>{title}</p>
      <p className={styles.study__text}>{text}</p>
      <p className={styles.study__level}>{level}</p>
    </li>
  );
};

export default StudyItem;
