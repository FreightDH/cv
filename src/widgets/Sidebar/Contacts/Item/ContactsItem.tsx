import { ReactElement } from 'react';
import cl from './ContactsItem.module.scss';

interface ContactProps {
  img: Record<string, string>;
  title: string;
  text: string;
  link?: string;
}

const ContactsItem: React.FC<ContactProps> = ({ img, title, text, link }): ReactElement => {
  return (
    <li className={cl.contacts__item}>
      <div className={cl.contacts__icon}>
        <img src={img.src} alt={img.alt} />
      </div>
      <div className={cl.contacts__content}>
        <p className={cl.contacts__title}>{title}</p>
        {link ? (
          <a href={link} target="blank" rel="noreferrer" className={cl.contacts__link}>
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
