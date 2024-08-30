import { ReactElement } from 'react';

import { useLanguage } from 'shared/contexts/LanguageContext';

import contactsInfo from './contactsInfo';
import ContactsItem from './Item/ContactsItem';
import cl from './SidebarContacts.module.scss';

const SidebarContacts = (): ReactElement => {
  const { currentLanguage } = useLanguage();

  return (
    <div>
      <ul className={cl.contacts__list}>
        {currentLanguage === 'eng'
          ? contactsInfo['eng'].map(({ id, ...contact }) => <ContactsItem {...contact} key={id} />)
          : contactsInfo['ru'].map(({ id, ...contact }) => <ContactsItem {...contact} key={id} />)}
      </ul>
    </div>
  );
};

export default SidebarContacts;
