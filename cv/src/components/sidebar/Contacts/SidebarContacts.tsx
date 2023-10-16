import contactsInfo from './contactsInfo';
import ContactsItem from './Item/ContactsItem';
import './SidebarContacts.scss';

const SidebarContacts = () => {
  return (
    <div>
      <ul className="contacts__list">
        {contactsInfo.map((contact) => (
          <ContactsItem {...contact} key={Math.random().toString()} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarContacts;
