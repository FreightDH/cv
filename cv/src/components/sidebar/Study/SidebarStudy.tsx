import { ReactElement } from 'react';
import studyInfo from './studyInfo';
import StudyItem from './Item/StudyItem';
import styles from './SidebarStudy.module.scss';

const SidebarStudy = (): ReactElement => {
  return (
    <div>
      <ul className={styles.study__list}>
        {studyInfo.map(({ id, ...study }) => (
          <StudyItem {...study} key={id} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarStudy;
