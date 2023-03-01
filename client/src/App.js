import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <div>
        <Content/>
      </div>
    </div>
  );
}

export default App;
