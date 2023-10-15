import contactsInfo from './contactsInfo';
import ContactsItem from './Item/ContactsItem';

const SidebarContacts = () => {
  return (
    <div>
      <ul>
        {contactsInfo.map((contact) => (
          <ContactsItem {...contact} key={Math.random().toString()} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarContacts;
