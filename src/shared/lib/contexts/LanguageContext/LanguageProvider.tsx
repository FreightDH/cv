import { ReactNode, useMemo, useState, type FC, type ReactElement } from 'react';
import { LanguageContext } from './LanguageContext';

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }): ReactElement => {
  const [currentLanguage, setCurrentLanguage] = useState<'eng' | 'ru'>('ru');
  const value = useMemo(
    () => ({
      currentLanguage,
      setCurrentLanguage,
    }),
    [currentLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
