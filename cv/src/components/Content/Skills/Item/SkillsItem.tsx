import styles from './SkillsItem.module.scss';

type Skill = {
  text: string;
};

const SkillsItem = ({ text }: Skill) => {
  return <li className={styles.SkillsItem}>{text}</li>;
};

export default SkillsItem;
