import { ReactElement } from 'react';

import { Content, Projects, Sidebar } from 'widgets';
import { LanguageTrigger } from 'shared/UI/LanguageTrigger';
import { LanguageProvider } from 'shared/lib/contexts/LanguageContext';

import cl from './App.module.scss';

function App(): ReactElement {
  return (
    <LanguageProvider>
      <main className={cl.page}>
        <div className="page__container">
          <LanguageTrigger />
          <div className={cl.page__body}>
            <div className={cl.page__info}>
              <Sidebar />
              <Content />
            </div>
            <Projects />
          </div>
        </div>
      </main>
    </LanguageProvider>
  );
}

export default App;
