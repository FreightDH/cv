import contactsInfo from './contactsInfo';
import ContactsItem from './Item/ContactsItem';
import style from './SidebarContacts.module.scss';

const SidebarContacts = () => {
  return (
    <div>
      <ul className={style.contacts__list}>
        {contactsInfo.map((contact, index) => (
          <ContactsItem {...contact} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarContacts;
