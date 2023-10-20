import ContentTitle from '../Title/ContentTitle';
import ToolsItem from './Item/ToolsItem';
import toolsInfo from './toolsInfo';
import styles from './ToolsSection.module.scss';

const Tools = () => {
  return (
    <section className="section">
      <ContentTitle>Tools</ContentTitle>
      <div className="content--content">
        <ul className={styles.tools__list}>
          {toolsInfo.map((tool) => (
            <ToolsItem {...tool} key={Math.random().toString()} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tools;
