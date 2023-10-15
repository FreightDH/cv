import styles from './ToolsItem.module.scss';

type Tool = {
  img: Record<string, string>;
  tool: string;
  text: string;
};

const ToolsItem = ({ img, tool, text }: Tool) => {
  return (
    <li className={styles.tools__item}>
      <div className={styles.tools__img}>
        <img src={img.src} alt={img.alt} />
      </div>
      <div>
        <h3 className={styles.tools__tool}>{tool}</h3>
        <p className={styles.tools__text}>{text}</p>
      </div>
    </li>
  );
};

export default ToolsItem;
