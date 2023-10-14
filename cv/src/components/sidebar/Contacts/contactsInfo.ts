import { iconPath } from '../../../variables';

const contactsInfo = [
  {
    img: { src: `${iconPath}sidebar/email.svg`, alt: 'email-icon' },
    title: 'Email',
    text: 'zolotkovmax@gmail.com',
    link: 'mailto:zolotkovmax@gmail.com',
  },
  {
    img: { src: `${iconPath}sidebar/github.svg`, alt: 'github-icon' },
    title: 'GitHub',
    text: 'FreightDH',
    link: 'https://github.com/freightdh/',
  },
  {
    img: { src: `${iconPath}sidebar/telegram.svg`, alt: 'telegram-icon' },
    title: 'Telegram',
    text: '@FreightDH',
    link: 'https://tele.click/freightdh',
  },
  {
    img: { src: `${iconPath}sidebar/location.svg`, alt: 'location-icon' },
    title: 'Location',
    text: 'Saint-Petersburg, Russia',
  },
];

export default contactsInfo;
