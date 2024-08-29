import { createContext, Dispatch, SetStateAction } from 'react';

interface LanguageContextProps {
  currentLanguage: 'ru' | 'eng';
  setCurrentLanguage: Dispatch<SetStateAction<'eng' | 'ru'>>;
}

export const LanguageContext = createContext<LanguageContextProps>({
  currentLanguage: 'eng',
  setCurrentLanguage: () => {},
});
