import { ReactElement } from 'react';
import cl from './SkillsItem.module.scss';

interface SkillProps {
  skill: string;
}

const SkillsItem: React.FC<SkillProps> = ({ skill }): ReactElement => {
  return <li className={cl.skill}>{skill}</li>;
};

export default SkillsItem;
