import styles from './ExperienceItem.module.scss';

interface ExperienceProps {
  img: Record<string, string>;
  post: string;
  place: string;
  time: string;
  type: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceProps> = ({ img, post, place, time, type, description }) => {
  return (
    <li className={styles.experience__item}>
      <div className={styles.experience__body}>
        <div className={styles.experience__company}>
          <div className="icon exp">
            <img src={img.src} alt={img.alt} />
          </div>
          <div className={styles.company__info}>
            <div className={styles.info__post}>{post}</div>
            <div className={styles.info__place}>{place}</div>
          </div>
        </div>
        <div className={styles.experience__time}>
          <div className={styles.time__text}>{time}</div>
          <div className={styles.time__type}>{type}</div>
        </div>
      </div>
      <p className={styles.experience__description}>{description}</p>
    </li>
  );
};

export default ExperienceItem;
