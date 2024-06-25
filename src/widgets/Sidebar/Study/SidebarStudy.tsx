import { ReactElement } from 'react';
import studyInfo from './studyInfo';
import StudyItem from './Item/StudyItem';
import cl from './SidebarStudy.module.scss';

const SidebarStudy = (): ReactElement => {
  return (
    <div>
      <ul className={cl.study__list}>
        {studyInfo.map(({ id, ...study }) => (
          <StudyItem {...study} key={id} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarStudy;
