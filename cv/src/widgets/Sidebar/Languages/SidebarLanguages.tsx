import { ReactElement } from 'react';
import languagesInfo from './languagesInfo';
import LanguagesItem from './Item/LanguagesItem';
import styles from './SidebarLanguages.module.scss';

const SidebarLanguages = (): ReactElement => {
  return (
    <div>
      <ul className={styles.languages__list}>
        {languagesInfo.map(({ id, ...language }) => (
          <LanguagesItem {...language} key={id} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarLanguages;
