import studyInfo from './studyInfo';
import StudyItem from './Item/StudyItem';
import styles from './SidebarStudy.module.scss';

const SidebarStudy = () => {
  return (
    <div>
      <ul className={styles.study__list}>
        {studyInfo.map((study) => (
          <StudyItem {...study} key={Math.random().toString()} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarStudy;
