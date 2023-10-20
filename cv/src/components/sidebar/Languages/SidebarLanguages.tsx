import LanguagesItem from './Item/LanguagesItem';
import languagesInfo from './languagesInfo';
import styles from './SidebarLanguages.module.scss';

const SidebarLanguages = () => {
  return (
    <div>
      <ul className={styles.languages__list}>
        {languagesInfo.map((language) => (
          <LanguagesItem {...language} key={Math.random().toString()} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarLanguages;
