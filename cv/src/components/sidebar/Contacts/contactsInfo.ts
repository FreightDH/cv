import { iconPath } from '../../../variables';

const contactsInfo = [
  {
    id: 1,
    img: { src: `${iconPath}sidebar/email.svg`, alt: 'email-icon' },
    title: 'Email',
    text: 'zolotkovmax@gmail.com',
    link: 'mailto:zolotkovmax@gmail.com',
  },
  {
    id: 2,
    img: { src: `${iconPath}sidebar/github.svg`, alt: 'github-icon' },
    title: 'GitHub',
    text: 'FreightDH',
    link: 'https://github.com/freightdh/',
  },
  {
    id: 3,
    img: { src: `${iconPath}sidebar/telegram.svg`, alt: 'telegram-icon' },
    title: 'Telegram',
    text: '@FreightDH',
    link: 'https://tele.click/freightdh',
  },
  {
    id: 4,
    img: { src: `${iconPath}sidebar/location.svg`, alt: 'location-icon' },
    title: 'Location',
    text: 'Saint-Petersburg, Russia',
  },
];

export default contactsInfo;
