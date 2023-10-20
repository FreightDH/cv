import contactsInfo from './contactsInfo';
import ContactsItem from './Item/ContactsItem';
import style from './SidebarContacts.module.scss';

const SidebarContacts = () => {
  return (
    <div>
      <ul className={style.contacts__list}>
        {contactsInfo.map((contact) => (
          <ContactsItem {...contact} key={Math.random().toString()} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarContacts;
