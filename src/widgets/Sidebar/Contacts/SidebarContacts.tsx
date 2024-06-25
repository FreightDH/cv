import { ReactElement } from 'react';
import contactsInfo from './contactsInfo';
import ContactsItem from './Item/ContactsItem';
import cl from './SidebarContacts.module.scss';

const SidebarContacts = (): ReactElement => {
  return (
    <div>
      <ul className={cl.contacts__list}>
        {contactsInfo.map(({ id, ...contact }) => (
          <ContactsItem {...contact} key={id} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarContacts;
