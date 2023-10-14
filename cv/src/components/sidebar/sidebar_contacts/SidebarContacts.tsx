import contactsInfo from './contactsInfo';
import ContactsItem from './contacts_item/ContactsItem';

const SidebarContacts = () => {
  return (
    <div className="sidebar__contacts">
      <ul className="contacts__list">
        {contactsInfo.map((contact) => (
          <ContactsItem {...contact} key={Math.random().toString()} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarContacts;
