import { ReactElement } from 'react';
import contactsInfo from './contactsInfo';
import ContactsItem from './Item/ContactsItem';
import style from './SidebarContacts.module.scss';

const SidebarContacts = (): ReactElement => {
  return (
    <div>
      {}
      <ul className={style.contacts__list}>
        {contactsInfo.map(({ id, ...contact }) => (
          <ContactsItem {...contact} key={id} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarContacts;
