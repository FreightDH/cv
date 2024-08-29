import { ReactElement } from 'react';

import { Content, Projects, Sidebar } from 'widgets';
import { LanguageProvider } from 'shared/contexts/LanguageContext';

import cl from './App.module.scss';

function App(): ReactElement {
  return (
    <LanguageProvider>
      <main className={cl.page}>
        <div className="page__container">
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
