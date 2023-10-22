import { ReactElement } from 'react';
import { imgPath } from '../../variables';
import SidebarIntro from './Intro/SidebarIntro';
import Divider from './Divider/Divider';
import SidebarContacts from './Contacts/SidebarContacts';
import SidebarStudy from './Study/SidebarStudy';
import SidebarLanguages from './Languages/SidebarLanguages';
import styles from './Sidebar.module.scss';

const profileImage = { src: `${imgPath}photo.jpg`, alt: 'my-photo' };

const Sidebar = (): ReactElement => {
  return (
    <aside className={styles.Sidebar}>
      <SidebarIntro {...profileImage} />
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
