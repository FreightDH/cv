import studyInfo from './studyInfo';
import StudyItem from './Item/StudyItem';
import './SidebarStudy.scss';

const SidebarStudy = () => {
  return (
    <div>
      <ul className="study__list">
        {studyInfo.map((item) => (
          <StudyItem {...item} key={Math.random().toString()} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarStudy;
