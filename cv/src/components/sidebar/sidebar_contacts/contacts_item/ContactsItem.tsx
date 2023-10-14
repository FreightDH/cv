import styles from './ContactsItem.module.scss';

type Contact = {
  img: Record<string, string>;
  title: string;
  text: string;
  link?: string;
};

const ContactsItem = ({ img, title, text, link }: Contact) => {
  return (
    <li className={styles.contacts__item}>
      <div className={styles.contacts__icon}>
        <img src={img.src} alt={img.alt} />
      </div>
      <div className={styles.contacts__content}>
        <p className={styles.contacts__title}>{title}</p>
        <a href={link} target="_blank" rel="noreferrer">
          {text}
        </a>
      </div>
    </li>
  );
};

export default ContactsItem;
