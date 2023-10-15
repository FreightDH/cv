import ContentTitle from '../Title/ContentTitle';
import ToolsItem from './Item/ToolsItem';
import toolsInfo from './toolsInfo';
import './ToolsSection.scss';

const Tools = () => {
  return (
    <section className="tools">
      <ContentTitle>Tools</ContentTitle>
      <div className="content--content">
        <ul className="tools__list">
          {toolsInfo.map((tool) => (
            <ToolsItem {...tool} key={Math.random().toString()} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tools;
