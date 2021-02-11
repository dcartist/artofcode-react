import logo from './logo.svg';
import "./css/an.css"
import './App.css';
import ParticlesBg from 'particles-bg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={process.env.PUBLIC_URL + '/images/angel-01.svg'} className="floating"/>
      <h1>Art of Code</h1>
      </header>
    </div>
  );
}

export default App;
