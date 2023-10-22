import { ReactElement } from 'react';
import styles from './SkillsItem.module.scss';

interface SkillProps {
  skill: string;
}

const SkillsItem: React.FC<SkillProps> = ({ skill }): ReactElement => {
  return <li className={styles.SkillsItem}>{skill}</li>;
};

export default SkillsItem;
