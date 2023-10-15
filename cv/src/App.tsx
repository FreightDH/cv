import './styles/App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <main className="page">
        <div className="page__container">
          <div className="page__body">
            <Sidebar />
            <Content />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
