import LanguagesItem from './Item/LanguagesItem';
import languagesInfo from './languagesInfo';
import './SidebarLanguages.scss';

const SidebarLanguages = () => {
  return (
    <div>
      <ul className="languages__list">
        {languagesInfo.map((language) => (
          <LanguagesItem {...language} key={Math.random().toString()} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarLanguages;
