import { ReactElement } from 'react';

import { Title } from 'shared';
import { useLanguage } from 'shared/contexts/LanguageContext';

import ToolsItem from './Item/ToolsItem';
import toolsInfo from './toolsInfo';
import cl from './ToolsSection.module.scss';

const Tools = (): ReactElement => {
  const { currentLanguage } = useLanguage();

  return (
    <section className="section">
      <Title>{currentLanguage === 'eng' ? 'Tools' : 'Технологии'}</Title>
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
