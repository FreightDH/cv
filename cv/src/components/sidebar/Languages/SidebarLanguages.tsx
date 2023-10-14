import LanguagesItem from './Item/LanguagesItem';
import languagesInfo from './languagesInfo';

const SidebarLanguages = () => {
  return (
    <div className="sidebar__languages">
      <ul className="languages__list">
        {languagesInfo.map((item) => (
          <LanguagesItem {...item} key={Math.random().toString()} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarLanguages;
