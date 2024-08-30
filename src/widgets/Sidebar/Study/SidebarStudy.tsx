import { ReactElement } from 'react';

import { useLanguage } from 'shared/lib/contexts/LanguageContext';

import StudyItem from './Item/StudyItem';
import studyInfo from './studyInfo';
import cl from './SidebarStudy.module.scss';

const SidebarStudy = (): ReactElement => {
  const { currentLanguage } = useLanguage();

  return (
    <div>
      <ul className={cl.study__list}>
        {currentLanguage === 'eng'
          ? studyInfo['eng'].map(({ id, ...study }) => <StudyItem {...study} key={id} />)
          : studyInfo['ru'].map(({ id, ...study }) => <StudyItem {...study} key={id} />)}
      </ul>
    </div>
  );
};

export default SidebarStudy;
