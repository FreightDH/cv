import styles from './SkillsItem.module.scss';

const SkillsItem = ({ text }: Record<string, string>) => {
  return <li className={styles.SkillsItem}>{text}</li>;
};

export default SkillsItem;
