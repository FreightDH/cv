import { ReactElement } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import Projects from './components/Projects/Projects';
import './styles/App.scss';

function App(): ReactElement {
  return (
    <div className="App">
      <main className="page">
        <div className="page__container">
          <div className="page__body">
            <div className="page__info">
              <Sidebar />
              <Content />
            </div>
            <Projects />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
