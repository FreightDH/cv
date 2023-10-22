import { ReactElement } from 'react';
import styles from './ContactsItem.module.scss';

interface ContactProps {
  img: Record<string, string>;
  title: string;
  text: string;
  link?: string;
}

const ContactsItem: React.FC<ContactProps> = ({ img, title, text, link }): ReactElement => {
  return (
    <li className={styles.contacts__item}>
      <div className={styles.contacts__icon}>
        <img src={img.src} alt={img.alt} />
      </div>
      <div className={styles.contacts__content}>
        <p className={styles.contacts__title}>{title}</p>
        {link ? (
          <a href={link} target="blank" rel="noreferrer" className={styles.contacts__link}>
            {text}
          </a>
        ) : (
          <p>{text}</p>
        )}
      </div>
    </li>
  );
};

export default ContactsItem;
