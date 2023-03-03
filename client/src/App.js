import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <div>
        <Router>
          <Content/>
        </Router>
      </div>
    </div>
  );
}

export default App;
