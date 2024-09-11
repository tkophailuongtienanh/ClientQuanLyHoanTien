import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='font-bold'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link bg-black"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type='primary'> Button </Button>
      </header>
    </div>
  );
}

export default App;
