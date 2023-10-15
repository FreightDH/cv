import LanguagesItem from './Item/LanguagesItem';
import languagesInfo from './languagesInfo';

const SidebarLanguages = () => {
  return (
    <div>
      <ul>
        {languagesInfo.map((item) => (
          <LanguagesItem {...item} key={Math.random().toString()} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarLanguages;
