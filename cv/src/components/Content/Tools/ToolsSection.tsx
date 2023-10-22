import { ReactElement } from 'react';
import ContentTitle from '../Title/ContentTitle';
import ToolsItem from './Item/ToolsItem';
import toolsInfo from './toolsInfo';
import styles from './ToolsSection.module.scss';

const Tools = (): ReactElement => {
  return (
    <section className="section">
      <ContentTitle>Tools</ContentTitle>
      <div className="content--content">
        <ul className={styles.tools__list}>
          {toolsInfo.map(({ id, ...tool }) => (
            <ToolsItem {...tool} key={id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tools;
