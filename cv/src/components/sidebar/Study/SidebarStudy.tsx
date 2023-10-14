import studyInfo from './studyInfo';
import StudyItem from './Item/StudyItem';

const SidebarStudy = () => {
  return (
    <div className="sidebar__study">
      <ul className="study__list">
        {studyInfo.map((item) => (
          <StudyItem {...item} key={Math.random().toString()} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarStudy;
