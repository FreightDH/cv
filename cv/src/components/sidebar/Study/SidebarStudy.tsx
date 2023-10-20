import studyInfo from './studyInfo';
import StudyItem from './Item/StudyItem';
import styles from './SidebarStudy.module.scss';

const SidebarStudy = () => {
  return (
    <div>
      <ul className={styles.study__list}>
        {studyInfo.map((study, index) => (
          <StudyItem {...study} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarStudy;
