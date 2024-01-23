import { ReactElement } from 'react';
import cl from './ToolsItem.module.scss';

interface ToolProps {
  img: Record<string, string>;
  tool: string;
  text: string;
}

const ToolsItem: React.FC<ToolProps> = ({ img, tool, text }): ReactElement => {
  return (
    <li className={cl.tools__item}>
      <div className="icon">
        <img src={img.src} alt={img.alt} />
      </div>
      <div>
        <h3 className={cl.tools__tool}>{tool}</h3>
        <p className={cl.tools__text}>{text}</p>
      </div>
    </li>
  );
};

export default ToolsItem;
