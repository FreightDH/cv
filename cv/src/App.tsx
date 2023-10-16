import './styles/App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import Projects from './components/Projects/Projects';

function App() {
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
