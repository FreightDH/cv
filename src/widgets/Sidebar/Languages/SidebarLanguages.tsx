import { ReactElement } from 'react';

import { useLanguage } from 'shared/lib/contexts/LanguageContext';

import languagesInfo from './languagesInfo';
import LanguagesItem from './Item/LanguagesItem';
import styles from './SidebarLanguages.module.scss';

const SidebarLanguages = (): ReactElement => {
  const { currentLanguage } = useLanguage();
  return (
    <div>
      <ul className={styles.languages__list}>
        {currentLanguage === 'eng'
          ? languagesInfo['eng'].map(({ id, ...language }) => <LanguagesItem {...language} key={id} />)
          : languagesInfo['ru'].map(({ id, ...language }) => <LanguagesItem {...language} key={id} />)}
      </ul>
    </div>
  );
};

export default SidebarLanguages;
