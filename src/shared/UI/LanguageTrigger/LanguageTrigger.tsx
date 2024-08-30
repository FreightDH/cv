import type { FC, ReactElement } from 'react';

import { cn } from 'shared/lib/classNames';
import { useLanguage } from 'shared/lib/contexts/LanguageContext';

import cl from './LanguageTrigger.module.scss';

export const LanguageTrigger: FC = (): ReactElement => {
  const { currentLanguage, setCurrentLanguage } = useLanguage();

  return (
    <div className={cl.trigger}>
      <button
        className={cn(cl.trigger__item, { [cl.active]: currentLanguage === 'eng' })}
        onClick={() => setCurrentLanguage('eng')}
      >
        ENG
      </button>
      <button
        className={cn(cl.trigger__item, { [cl.active]: currentLanguage === 'ru' })}
        onClick={() => setCurrentLanguage('ru')}
      >
        RU
      </button>
    </div>
  );
};
