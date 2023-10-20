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
          {toolsInfo.map((tool, index) => (
            <ToolsItem {...tool} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tools;
