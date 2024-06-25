import { ReactElement } from 'react';
import { Content, Projects, Sidebar } from 'widgets';
import cl from './App.module.scss';

function App(): ReactElement {
  return (
    <>
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
    </>
  );
}

export default App;
