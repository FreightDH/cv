import { imgPath } from '../../variables';
import SidebarContacts from './Contacts/SidebarContacts';
import Divider from './Divider/Divider';
import SidebarIntro from './Intro/SidebarIntro';
import SidebarLanguages from './Languages/SidebarLanguages';
import SidebarStudy from './Study/SidebarStudy';
import styles from './Sidebar.module.scss';

const profileImage = { src: `${imgPath}photo.jpg`, alt: 'my-photo' };

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
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