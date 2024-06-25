import cl from './ExperienceItem.module.scss';

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
    <li className={cl.experience__item}>
      <div className={cl.experience__body}>
        <div className={cl.experience__company}>
          <div className="icon exp">
            <img src={img.src} alt={img.alt} />
          </div>
          <div className={cl.company__info}>
            <div className={cl.info__post}>{post}</div>
            <div className={cl.info__place}>{place}</div>
          </div>
        </div>
        <div className={cl.experience__time}>
          <div className={cl.time__text}>{time}</div>
          <div className={cl.time__type}>{type}</div>
        </div>
      </div>
      <p className={cl.experience__description}>{description}</p>
    </li>
  );
};

export default ExperienceItem;
