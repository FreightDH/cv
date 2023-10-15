import studyInfo from './studyInfo';
import StudyItem from './Item/StudyItem';

const SidebarStudy = () => {
  return (
    <div>
      <ul>
        {studyInfo.map((item) => (
          <StudyItem {...item} key={Math.random().toString()} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarStudy;
