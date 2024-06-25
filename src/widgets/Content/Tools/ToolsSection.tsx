import { ReactElement } from 'react';

import toolsInfo from './toolsInfo';
import { Title } from 'shared';
import ToolsItem from './Item/ToolsItem';

import cl from './ToolsSection.module.scss';

const Tools = (): ReactElement => {
  return (
    <section className="section">
      <Title>Tools</Title>
      <div className="content--content">
        <ul className={cl.tools__list}>
          {toolsInfo.map(({ id, ...tool }) => (
            <ToolsItem {...tool} key={id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tools;
