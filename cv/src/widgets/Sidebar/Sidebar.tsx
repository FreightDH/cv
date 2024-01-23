import { ReactElement } from 'react';

import SidebarIntro from './Intro/SidebarIntro';
import SidebarContacts from './Contacts/SidebarContacts';
import SidebarStudy from './Study/SidebarStudy';
import SidebarLanguages from './Languages/SidebarLanguages';
import Divider from './Divider/Divider';

import cl from './Sidebar.module.scss';

const Sidebar = (): ReactElement => {
  return (
    <aside className={cl.sidebar}>
      <SidebarIntro />
      <Divider />
      <SidebarContacts />
      <Divider />
      <SidebarStudy />
      <Divider />
      <SidebarLanguages />
    </aside>
  );
};

export default Sidebar;
